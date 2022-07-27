import path from 'path';
import { logger } from './util/logging';
import { Config } from './model/config';
import { register } from 'ts-node';

/**
 * Load a config file by absolute path. Config file can be *.js or *.ts.
 * The config file must export a default object that extends {@link !lib/model/config.Config}.
 * 
 * @param filename absolute path to config file 
 * @returns Config object
 */
export async function loadConfigFile(filename: string): Promise<Config> {
    try {
        register();
        const { default: configObject } = require(filename);
        if (!configObject) {
            throw new Error(`No Config object imported from config file ${filename}`);
        }
        return configObject;
    } catch (err: any) {
        logger.error(`Failed to load config file.\n  code: ${err.code}\n  message: ${err.message}`);
        throw err;
    }
}

/**
 * Load a config file relative to the current working directory.
 *  
 * @param filename relative path to config file
 * @returns Config object
 */
export async function loadLocalConfigFile(filename: string): Promise<Config> {
    logger.debug(`Loading user config file "${filename}"...`);
    let configPath = path.join(process.cwd(), filename);

    let config = await loadConfigFile(configPath);

    if (!config.specBaseDir) {
        config.specBaseDir = path.dirname(filename);
    }

    return config;
}