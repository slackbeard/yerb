/**
 * @packageDocumentation
 * The worker manager thread dispatches worker threads to process tests.
 * 
 * The number of worker threads is determined by {@link !lib/model/config.Config.workers}.
 * 
 * If you specify a manager init script in your config ({@link !lib/model/config.Config.managerInitScript}),
 * the init script will be loaded in the manager thread.
 * 
 * From the manager init script you can get a reference to the global WorkerManager with {@link getWorkerManager}.
 * 
 */

import path from 'path';
import { logger } from './util/logging';
import { SHARE_ENV, Worker } from 'worker_threads';

import { Config } from './model/config';
import { ResultsCollection } from './model/results';
import {
    NodeResultMessage,
    StdoutMessage,
    ParsedTestMessage,
    ParsedSuiteMessage,
    BaseMessage,
    ProcessSpecFileMessage,
    WorkerReadyMessage,
    StderrMessage
} from './model/messages';
import { AsyncEventTarget } from './model/async-event-target';
import { EventNames, ManagerResultEvent } from './model/events';
import { DefaultReporter } from './reporter';

/**
 * WorkerManager class dispatches and manages worker threads to process tests.
 */
export class WorkerManager extends AsyncEventTarget {

    public config: Config = new Config();

    public workerPromises: Promise<any>[] = [];

    public specFiles: string[] = [];

    public results: ResultsCollection = new ResultsCollection();

    /**
     * Custom function to sort spec files.
     * By default, spec files are sorted by file size and distributed evenly among workers.
     * 
     * @param fileNames array of spec file names
     * @returns array of sorted spec file names 
     */
    public sortFunction = async (fileNames: string[]) => {
        // Sort files by size so we can evenly distribute files to workers
        const fileSizes: any = {};
        const fsPromises = require('fs/promises');

        for (const filename of fileNames) {
            const file = await fsPromises.open(filename);
            fileSizes[filename] = (await file.stat()).size;
            await file.close();
        }

        logger.debug(`File sizes:\n${JSON.stringify(fileSizes, null, 2)}`);
        // sort filenames by file size:
        return Object.keys(fileSizes).sort((fa, fb) => (fileSizes[fa] - fileSizes[fb]));
    };

    /**
     * Custom function to shard (distribute) spec files among workers.
     *  
     * @param sortedFiles array of spec files after processed by {@link WorkerManager.sortFunction}
     * @returns array of spec file arrays. One spec file array per worker.
     */
    public shardFunction = async (sortedFiles: string[]) => {

        const shardCount = this.config.workers;
        // each shard has an array of filenames, ie. shards is an array of arrays:
        let shards = Array.from(Array(shardCount), () => [] as string[]);
        let shardIndex = 0;
        let shardIndexDir = 1; // direction
        let endShardIndex = shardCount - 1;

        logger.debug(`Sorted files: ${JSON.stringify(sortedFiles)}, shards: ${JSON.stringify(shards)}`);
        for (let filename of sortedFiles) {
            shards[shardIndex].push(filename);
            shardIndex += shardIndexDir;
            // zigzag through shards so the sums of their file sizes are evenly distributed
            if (shardIndex < 0 || shardIndex > endShardIndex) {
                shardIndexDir = -shardIndexDir;
                shardIndex += shardIndexDir;
            }
        }
        return shards;
    };

    constructor(config: Config) {
        super();
        this.config = config;
    }

    /**
     * Add handler for test result event.
     * This event is triggered when a worker thread reports test results to the manager.
     */
    onResult(callback: ((event: ManagerResultEvent) => any)) {
        this.addEventListener(EventNames.MANAGER_RESULT, callback);
    }

    async loadInitScript() {

        if (this.config.managerInitScript) {

            if (!this.config.specBaseDir) {
                this.config.specBaseDir = ".";
            }
            try {

                const relativePath = path.join(this.config.specBaseDir, this.config.managerInitScript);
                const fullPath = path.relative(__dirname, relativePath);
                logger.write(`Manager loading init script from "${fullPath}"...`);

                delete require.cache[fullPath];
                await import(fullPath);

            } catch (err: any) {
                logger.error(`Manager init script failed: ${err}`);
                throw err;
            }
        }
    }

    addWorker(workerPath: string, specFiles: string[]) {
        // if we're running in ts-node (for development), load the .ts file:
        logger.debug(`Using ts-node: ${this.config.tsnode_enabled}`);

        let scriptPath = './worker-main.js';

        if (this.config.tsnode_enabled) {
            scriptPath = './worker-main.ts';
        }

        let msgHandlerDone: any = true;

        const workerPromise = new Promise((resolve: any) => {

            const newWorker = new Worker(
                workerPath,
                {
                    workerData: {
                        scriptPath: scriptPath,
                        config: this.config,
                    },
                    env: SHARE_ENV,
                }
            );
            logger.debug(`Created new worker: id=${newWorker.threadId}`);

            // capture threadID because it seems to be "-1" on exit events:
            let threadId = newWorker.threadId;
            newWorker.on('exit', async (code) => {
                logger.debug(`Parent received exit from worker (id ${threadId}): (code ${code})`);
                let chunk;
                let maxreads = 100;
                while (null !== (chunk = newWorker.stdout.read())) {
                    logger.debug(`reading from worker's stdout: ${chunk}`);
                    if (maxreads-- <= 0) break;
                }
                await msgHandlerDone;
                resolve(code);
            });

            newWorker.on('error', (error) => {
                logger.error(`Error from worker: ${JSON.stringify(error.stack)}`);
            });

            newWorker.on('message', async (msg: BaseMessage) => {

                msgHandlerDone = (async () => {

                    await msgHandlerDone;

                    logger.debug(`Parent received msg from worker: ${JSON.stringify(msg)}`);
                    switch (msg.msgType) {
                        case ParsedTestMessage.MSG_TYPE:
                            await this.handleNewTestMessage(msg as ParsedTestMessage);
                            break;
                        case ParsedSuiteMessage.MSG_TYPE:
                            await this.handleNewSuiteMessage(msg as ParsedSuiteMessage);
                            break;
                        case StdoutMessage.MSG_TYPE:
                            await this.handleStdoutMessage(msg as StdoutMessage);
                            break;
                        case StderrMessage.MSG_TYPE:
                            await this.handleStderrMessage(msg as StderrMessage);
                            break;
                        case NodeResultMessage.MSG_TYPE:
                            await this.handleResultMessage(msg as NodeResultMessage);
                            break;
                        default:
                            break;
                    }

                })();

            });
            const handler = async (msg: BaseMessage) => {
                if (msg.msgType == WorkerReadyMessage.MSG_TYPE) {
                    newWorker.postMessage(new ProcessSpecFileMessage(specFiles));
                    newWorker.off('message', handler);
                }
            }
            newWorker.on('message', handler);
        });

        // this.workerPromises.push(Promise.all([workerPromise, msgHandlerDone]));
        this.workerPromises.push(workerPromise);

    }


    /**
     * Wait for all worker threads to finish. 
     */
    async allWorkersExited() {
        logger.debug(`Waiting for all workers to exit ...`);

        let codes: any = [];
        try {
            codes = await Promise.all(this.workerPromises);
        } catch (e: any) {
            logger.warn(`Error waiting for workers to exit: ${e}`);
            throw e;
        }
        logger.debug(`All workers exited. Codes=${JSON.stringify(codes)}`);
        return codes;
    }


    /**
     * Dispatch worker threads to process spec files.
     */
    async processSpecFiles(specFiles: string[]) {

        specFiles.forEach((filename) => {
            this.results.addSpecFile(filename);
        });

        const sortedSpecFiles: string[] = await this.sortFunction(specFiles);
        const workerSpecFiles: string[][] = await this.shardFunction(sortedSpecFiles);

        const workerPath = path.join(__dirname, './worker-bootstrap.js');
        logger.debug(`Sharded worker batches:\n${JSON.stringify(workerSpecFiles, null, 2)}`);
        for (let fileBatch of workerSpecFiles) {

            await this.addWorker(workerPath, fileBatch);

        }

        const workerExitCodes = await this.allWorkersExited();

        // await (newWorker as any).handlerReady;
        logger.debug(`Parent done, all workers exited. Exit codes: ${JSON.stringify(workerExitCodes, null, 2)}.`);

        const reporter = new DefaultReporter();
        await reporter.report(this.results);
    }

    private handleNewSuiteMessage(msg: ParsedSuiteMessage) {
        if (typeof msg.parentNodeId === "undefined") {
            // if parentId is undefined, this suite is the spec file itself
            return;
        }
        this.results.addSuite(msg.filename, msg.node, msg.parentNodeId);
    }

    private handleNewTestMessage(msg: ParsedTestMessage) {
        this.results.addTest(msg.filename, msg.node, msg.parentNodeId);
    }

    private handleStdoutMessage(msg: StdoutMessage) {
        console.log(msg.data);
        try {
            const resultNode = this.results.getResult(msg.filename, msg.testId);
            resultNode.stdout += msg.data;
        } catch (err: any) {
            logger.error(`Error logging stdout: ${err}`);
        }
    }

    private handleStderrMessage(msg: StderrMessage) {
        console.log(msg.data);
        try {
            const resultNode = this.results.getResult(msg.filename, msg.testId);
            resultNode.stderr += msg.data;
        } catch (err: any) {
            logger.error(`Error logging stderr: ${err}`);
        }

    }

    private async handleResultMessage(msg: NodeResultMessage) {
        const result = this.results.updateResult(msg.filename, msg.testId, msg.result, msg.errors);

        await this.dispatchEvent(new ManagerResultEvent(result));
    }

}

/**
 * Global WorkerManager
 */
let workerManager: WorkerManager;

export function initWorkerManager(config: Config) {
    workerManager = new WorkerManager(config);
    return workerManager;
}

/**
 * Get a reference to global WorkerManager object 
 * @returns a reference to global WorkerManager object
 */
export function getWorkerManager() {
    if (!workerManager) {
        throw new Error("Worker manager not initialized (are you sure you're calling this from the manager thread?)");
    }

    return workerManager;
}

