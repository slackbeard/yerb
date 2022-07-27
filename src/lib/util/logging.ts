/**
 * @packageDocumentation
 * ## Console logging and colorful output functions
 * 
 * ## Logging
 * 
 * Example:
 * ```
 * // Create a console logger
 * const myLogger = new ConsoleLogger()
 * 
 * // set log level
 * myLogger.level = LogLevel.INFO
 * 
 * // log output
 * myLogger.info("Info here")
 * myLogger.warn("Warning here")
 * myLogger.debug("Debug won't be rendered at INFO level")
 * ```
 * 
 * ## Colors
 * 
 * By importing this module, color attributes will be available on the String class.
 * To set the color of a string, simply reference the attribute of the color, e.g:
 * 
 * ```
 * console.log("scary stuff".red)
 * ```
 * 
 * There is also a `color()` method that accepts a {@link AnsiColor} argument:
 * 
 * ```
 * console.log("cool stuff".color(AnsiColor.BLUE))
 * ```
 * 
 * Available colors:
 * - red
 * - green
 * - yellow
 * - blue
 * - white
 */

import path from 'path';

export enum AnsiColor {
    RED = "\x1b[31m",
    GREEN = "\x1b[32m",
    YELLOW = "\x1b[33m",
    BLUE = "\x1b[34m",
    WHITE = "\x1b[37m",
    RESET = "\x1b[0m",
}

/**
 * Add `color()` method to String class
 */
(String.prototype as any).color = function (col: AnsiColor) {
    return col + this.toString() + AnsiColor.RESET;
}

/**
 * Add color attributes to String class
 */
Object.defineProperties(
    String.prototype,
    {
        "red": {
            get() {
                return this.color(AnsiColor.RED);
            },
            configurable: true,
        },
        "green": {
            get() {
                return this.color(AnsiColor.GREEN);
            },
            configurable: true,
        },
        "blue": {
            get() {
                return this.color(AnsiColor.BLUE);
            },
            configurable: true,
        },
        "yellow": {
            get() {
                return this.color(AnsiColor.YELLOW);
            },
            configurable: true,
        },
    }
);

/**
 * Declare new String members for colors
 */
declare global {
    interface String {
        color(name: String): String;
        red: String;
        green: String;
        blue: String;
        yellow: String;
    }
}

export enum LogLevel {
    ALL = 0,
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

export class ConsoleLogger {

    public level: LogLevel = LogLevel.ALL;
    public logColors = {
        [LogLevel.DEBUG]: AnsiColor.GREEN,
        [LogLevel.INFO]: AnsiColor.WHITE,
        [LogLevel.WARN]: AnsiColor.YELLOW,
        [LogLevel.ERROR]: AnsiColor.RED,
    }

    private format(msg: String, level: String = "INFO", headerColor: String = AnsiColor.WHITE) {
        const errObj: any = {};
        Error.captureStackTrace(errObj, this.log);
        const callstack = errObj.stack;

        const callstackLines: string[] = callstack!.split('\n');
        const callerLineNumber = callstackLines.findIndex((line) => line.match(/\s*at /));

        const callstackEntry: string = callstackLines[callerLineNumber + 1];
        const callerParsed = /^\s*at ([^(]*\()?([^)]*)/.exec(callstackEntry);
        const callerFileAndLine = callerParsed![2];
        const callerParts = /(.*):(\d+):\d+/.exec(callerFileAndLine)!;
        const callerFileName = path.relative(process.cwd(), callerParts[1]);
        const callerLine = callerParts[2];

        return `[${new Date().toISOString()}] (${level}) (${callerFileName}:${callerLine}): `.color(headerColor) + `${msg}`;
    }

    /**
     * Log unformatted output to console
     * 
     * @param msg output string
     */
    write(msg: String) {
        console.log(msg)
    }

    /**
     * Log output at a given log level
     * 
     * @param msg output string 
     * @param level 
     */
    log(msg: String, level: LogLevel = LogLevel.INFO) {
        if (this.level > level) return;
        const levelName = LogLevel[level];
        this.write(this.format(msg, levelName, this.logColors[level]));
    }

    debug(msg: String) {
        this.log(msg, LogLevel.DEBUG);
    }

    info(msg: String) {
        this.log(msg, LogLevel.INFO);
    }

    warn(msg: String) {
        this.log(msg, LogLevel.WARN);
    }

    error(msg: String) {
        this.log(msg, LogLevel.ERROR);
    }

}


/**
 * Global logger used internally by yerb framework
 */
export const logger = new ConsoleLogger();
