#!/usr/bin/env node

import path from 'path';
import { glob, IOptions as GlobOptions } from 'glob';
import { logger, LogLevel } from './lib/util/logging';
import { Config } from './lib/model/config';
import { loadLocalConfigFile } from './lib/config';
import { initWorkerManager } from './lib/worker-manager';
import { ArgParser } from './lib/util/args';

logger.level = LogLevel.INFO;


(async () => {
    logger.write("Yerb starting...");

    const argParser = new ArgParser(
        [
            {
                name: 'verbose',
                shortName: 'v',
                description: 'Turn on extra logging for test framework',
                isFlag: true,
            },
            {
                name: 'config',
                shortName: 'c',
                description: 'Path to config file',
            },
            {
                arg: 'specfile',
                description: 'Path to spec files to run, e.g. "./test/*.spec.ts"',
            },
        ]
    );
    const cmdOptions = argParser.parse(process.argv);

    if (cmdOptions.options.help) {
        argParser.help();
        return;
    }

    if (cmdOptions.options.verbose) {
        logger.level = LogLevel.ALL;
    }

    // check if we're running from tsnode
    const tsnodeEnabled = (process as any)[Symbol.for("ts-node.register.instance")];
    const config = new Config();

    const manager = initWorkerManager(config);

    // load config from file, merge with default config
    if (cmdOptions.options.config) {
        let configFile = cmdOptions.options.config;

        logger.write(`Loading config from local file "${configFile}"`);
        let cfgFromFile = await loadLocalConfigFile(configFile);

        config.merge(cfgFromFile);
    }
    config.tsnode_enabled = (typeof tsnodeEnabled !== "undefined");

    logger.debug(`Final config: ${JSON.stringify(config, null, 2)}`);
    await manager.loadInitScript();

    // if spec files were specified on the command line:
    if (cmdOptions.args.length) {
        config.include = cmdOptions.args;
    }

    const specFiles = await gatherSpecFiles(config);

    if (!specFiles.length) {
        logger.warn(`No spec files found for patterns: ${JSON.stringify(config.include)}`);
        logger.info(`cwd = ${process.cwd()} dirname = ${__dirname}`);
        process.exit(1);
    }

    await manager.processSpecFiles(specFiles);

})();

async function gatherSpecFiles(config: Config) {

    if (!config.specBaseDir) {
        config.specBaseDir = ".";
    }

    // Find all spec files from config.include patterns:
    let globOptions: GlobOptions = {
        ignore: config.exclude,
    };

    const filenameSet: Set<string> = new Set();

    for (let filePattern of config.include) {
        logger.debug(`Listing files for pattern: ${filePattern}`);
        logger.debug(`Current dir: ${process.cwd()}`);

        let specFiles = glob.sync(
            path.join(config.specBaseDir, filePattern),
            globOptions
        );

        for (let filename of specFiles) {
            filenameSet.add(filename);
        }

    }
    const specFiles: string[] = [];
    specFiles.push(...Array.from(filenameSet));
    logger.debug(`All spec files found:\n${JSON.stringify(specFiles)}`);


    return specFiles;
}