import glob from 'glob';
import path from 'path';
import { AnsiColor, logger } from '../../src/lib/util/logging';

let specPattern = "*.spec.ts";
if (process.argv.length > 2) {
    specPattern = process.argv[2];
}
logger.write(`Using spec pattern: ${specPattern}`);

const excludePatterns: string[] = [];

(async () => {

    const specPath = path.join(__dirname, specPattern);
    let specFiles = glob.sync(specPath, { ignore: excludePatterns });
    logger.write(`Found ${specFiles.length} unit test files: ${JSON.stringify(specFiles)}`);
    const results: any = {};

    let totalFailures = 0;
    let totalTests = 0;

    for (const specFile of specFiles) {

        logger.write(`Running spec file "${specFile}"...`);
        results[specFile] = {
            error: null,
            tests: {},
        };

        try {

            logger.write(`Importing file from absolute path: ${specFile}`);

            let module = await import(specFile);
            // loop over exports looking for callables:
            for (const symbolName in module) {

                if (typeof module[symbolName] === "function") {

                    const testFunction = module[symbolName];
                    totalTests++;
                    results[specFile].tests[symbolName] = {
                        error: null
                    };

                    logger.write(``);
                    logger.write(`---------------------------------------`);
                    logger.write(`Running ${symbolName}()...`);

                    try {
                        let testResult = await testFunction();

                        logger.write(`Test "${symbolName}" PASSED.`.green);
                        logger.write(`Result: ${testResult}`.green);
                    } catch (err: any) {

                        totalFailures++;
                        results[specFile].tests[symbolName].error = err;
                        results[specFile].error = "One or more tests failed";

                        logger.write(`Test "${symbolName}" FAILED.`.red);
                        logger.write(`Error code: ${err.code}, message: ${err.message}`.red);
                        logger.write(`Stack:`.red);
                        logger.write(`${err.stack}`.red);
                    }
                    logger.write(`---------------------------------------`);
                }

            }

        } catch (err: any) {
            logger.write(`Error running spec file "${specFile}":`.red);
            logger.write(`${err.stack}`.red);
            results[specFile].error = err;
        }

        if (results[specFile].error) {
            logger.write(`Spec file "${specFile}" FAILED`.red);
        } else {
            logger.write(`Spec file "${specFile}" PASSED`.green);
        }

    }

    for (let specFile in results) {

        const specResult = results[specFile];

        let specColor: string;
        if (specResult.error) {
            specColor = AnsiColor.RED;
        } else {
            specColor = AnsiColor.GREEN;
        }
        logger.write(`File: ${specFile}`.color(specColor))
        if (specResult.error) {
            const errLines = specResult.error.stack.split('\n');
            const errSummary = errLines.slice(0, 3).join('\n');
            logger.write(`  Error: ${errSummary}`.color(AnsiColor.RED))
        }


        if (Object.keys(specResult.tests).length) {
            logger.write(`Tests:`.color(specColor));
        }

        for (let testName in specResult.tests) {
            const testResult = specResult.tests[testName];

            let testColor: string;
            if (testResult.error) {
                testColor = AnsiColor.RED;
            } else {
                testColor = AnsiColor.GREEN;
            }

            logger.write(`  -> ${testName}`.color(testColor));

            if (testResult.error) {
                const errLines = specResult.error.stack.split('\n');
                const errSummary = errLines.slice(0, 3).join('\n');
                logger.write(`    Error: ${errSummary}`.color(AnsiColor.RED))
            }
        }
    }

    // Exit with code 1 to indicate failure:
    if (totalFailures) {
        logger.write(`${totalFailures} tests failed, returning exit code 1`.red);
        process.exit(1);
    }

    logger.write(`All ${totalTests} tests passed!`.green);

})();