import path from 'path';
import { logger } from './util/logging';
import { Context } from './model/context';
import { NewSuiteEvent, NewTestEvent, TestCompletedEvent, SuiteCompletedEvent, StdoutEvent, BeforeTestStartEvent, BeforeSuiteStartEvent, StderrEvent, ParseErrorEvent } from './model/events';
import { Parser } from './parser';
import { Runner } from './runner';
import { TestStatus, SuiteNode } from './model/nodes';
import { Config } from './model/config';
import { AsyncEventTarget } from './model/async-event-target';

/**
 * Test Processor parses and runs spec files.
 * 
 * See {@link !lib/parser.Parser} and {@link !lib/runner.Runner}.
 * 
 * Tests and spec init scripts can get a reference to the test processor by calling {@link getTestProcessor}.
 */
export class TestProcessor extends AsyncEventTarget {

    public parser: Parser;
    public runner: Runner;
    public context: Context;

    constructor(config: Config) {
        super();
        this.context = new Context(config);
        this.parser = new Parser(this.context);
        this.runner = new Runner(this.context);
        this.onBeforeSuiteStart((event: BeforeSuiteStartEvent) => {
            event.node.state.startTime = new Date();
        });
        this.onBeforeTestStart((event: BeforeTestStartEvent) => {
            event.node.state.startTime = new Date();
        });
        this.onSuiteCompleted((event: SuiteCompletedEvent) => {
            event.node.state.endTime = new Date();
        });
        this.onTestCompleted((event: TestCompletedEvent) => {
            event.node.state.endTime = new Date();
        });
    }

    /**
     * Add a handler for worker stdout events.
     * This receives stdout from suites and tests.
     */
    public onStdout(callback: (event: StdoutEvent) => any) {
        this.runner.onStdout(callback);
        this.parser.onStdout(callback);
    }

    /**
     * Add a handler for worker stderr events.
     * This receives stderr from suites and tests.
     */
    public onStderr(callback: (event: StderrEvent) => any) {
        this.runner.onStderr(callback);
        this.parser.onStderr(callback);
    }

    /**
     * Add a handler to run before each test.
     * Note: unlike `beforeEach()`, this handler will apply to all suites, not just the current one.
     */
    public onBeforeTestStart(callback: (event: BeforeTestStartEvent) => any) {
        this.runner.onBeforeTestStart(callback);
    }

    /**
     * Add a handler to run before each suite.
     * Note: unlike `beforeAll()`, this handler will apply to all suites, not just the current one.
     */
    public onBeforeSuiteStart(callback: (event: BeforeSuiteStartEvent) => any) {
        this.runner.onBeforeSuiteStart(callback);
    }

    /**
     * Add a handler for test completion.
     * Examine `event.node.state.status` to see if the test passed or failed.
     */
    public onTestCompleted(callback: (event: TestCompletedEvent) => any) {
        this.runner.onTestCompleted(callback);
    }

    /**
     * Add a handler for suite completion.
     * Examine `event.node.state.status` to see if the suite passed or failed.
     */
    public onSuiteCompleted(callback: (event: SuiteCompletedEvent) => any) {
        this.runner.onSuiteCompleted(callback);
    }

    /**
     * Add a handler to run when a new suite is found by the parser.
     * This happens when the parser encounters a `describe()` block.
     * This handler is called before the suite is executed.
     */
    public onNewSuite(callback: (event: NewSuiteEvent) => any) {
        this.parser.onNewSuite(callback);
    }

    /**
     * Add a handler to run when a new test is found by the parser.
     * This happens when the parser encounters an `it()` block.
     * This handler is called before the test is executed.
     */
    public onNewTest(callback: (event: NewTestEvent) => any) {
        this.parser.onNewTest(callback);
    }

    /**
     * Add a handler for parser errors.
     * This happens when an error is thrown from inside a `describe()` block, not from a test.
     */
    public onParseError(callback: (event: ParseErrorEvent) => any) {
        this.parser.onParseError(callback);
    }


    public async processAllSpecFiles(fileBatch: string[]) {

        for (let filename of fileBatch) {
            await this.processSpecFile(filename);
        }

    }

    public async processSpecFile(specPath: string) {

        logger.log(`Loading spec file: ${specPath}`);
        const filename = path.basename(specPath);

        // Create root node to represent the spec file itself:
        this.context.currentFile = new SuiteNode(
            {
                name: specPath,
                parse: async () => {
                    const fullPath = path.relative(__dirname, specPath);
                    delete require.cache[fullPath];
                    await require(fullPath);
                }
            }
        );

        try {

            // load init script from config before every spec file:
            if (this.context.config!.workerInitScript) {
                const relativePath = path.join(this.context.config!.specBaseDir!, this.context.config!.workerInitScript);
                const fullPath = path.relative(__dirname, relativePath);
                logger.info(`Loading spec init script from "${fullPath}"...`);
                delete require.cache[fullPath];

                await require('./' + fullPath);
            }


            logger.debug(`Parsing spec file '${filename}'`);
            await this.parser.parse(this.context.currentFile);
            logger.debug(`Done parsing spec file '${filename}'.`);

            if (this.context.currentFile.children.length == 0) {
                logger.warn(`No suites or tests found in ${filename}`);
            }

            logger.debug(`Running spec file '${filename}'`);
            await this.runner.run(this.context.currentFile);
            logger.debug(`Done running spec file ${filename}`);

        } catch (err) {

            logger.error(`Error importing spec file ${filename}: ${err}`);
            if (this.context.currentFile) {
                this.context.currentFile.state.status = TestStatus.FAILED;
                await this.dispatchEvent(
                    new SuiteCompletedEvent(
                        this.context.currentFile.name,
                        this.context.currentFile
                    )
                );
            }

        }

        return this.context.currentFile;

    }
};

let testProcessor: TestProcessor;

export function initTestProcessor(config: Config) {
    testProcessor = new TestProcessor(config);
    return testProcessor;
}

/**
 * Get the global TestProcessor object.
 * Use this to get context info about the currently running test.
 *  
 * @returns the global TestProcessor
 */
export function getTestProcessor() {
    if (!testProcessor) {
        throw new Error("Test processor not initialized (Are you sure you're calling this from the worker thread?)");
    }
    return testProcessor;
}