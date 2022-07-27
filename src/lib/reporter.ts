import { TestStatus } from "./model/nodes";
import { BaseResult, ResultsCollection, SuiteResultNode } from "./model/results";
import { AnsiColor, logger } from "./util/logging";

/**
 * Pretty-print test results to stdout
 */
export class DefaultReporter {
    report(results: ResultsCollection) {
        logger.info(`Test results:`);
        for (const file in results.fileResultMap) {

            const result = results.fileResultMap[file];
            logger.write(`Spec file '${file}':`.color(AnsiColor.WHITE));
            this.reportNode(result.rootSuite, 0);

        }
    }

    reportNode(result: BaseResult, indent: number = 0) {
        let icon = '?';
        let color = AnsiColor.YELLOW;
        if (result.state.status == TestStatus.PASSED) {
            icon = '\u2714';
            color = AnsiColor.GREEN;
        } else if (result.state.status == TestStatus.FAILED) {
            icon = '\u2716';
            color = AnsiColor.RED;
        } else {
            icon = '\u29B8';
            color = AnsiColor.YELLOW;
        }

        let duration = 0.0;
        if (result.state.endTime && result.state.startTime) {
            duration = result.state.endTime!.getTime() - result.state.startTime!.getTime();
        }
        let durationS = duration / 1000;
        let durationM = Math.floor(durationS) % 60;
        let minutes = durationM > 0 ? `${durationM}m ` : '';
        let seconds = `${durationS}s`;

        let padding = new Array(indent).fill(' ').join('');
        logger.write(`${padding}${icon} - (${minutes}${seconds}) ${result.name}`.color(color));

        //print first line of error:
        if (result.errors.length > 0) {
            const errorLines = result.errors[0].split('\n');
            let errorSummary = errorLines.slice(0, 2).join('\n');
            logger.write(`${padding} -> ${errorSummary}`.red);
        }

        if (result instanceof SuiteResultNode) {
            for (let child of result.children) {
                this.reportNode(child, indent + 2);
            }
        }
    }
}