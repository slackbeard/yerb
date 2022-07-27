import { ParseErrorEvent } from '../../../src/lib/model/events';
import { getTestProcessor } from '../../../src/lib/test-processor';
import { ConsoleLogger } from '../../../src/lib/util/logging';

const testProcessor = getTestProcessor();

const logger = new ConsoleLogger();
testProcessor.onParseError((event: ParseErrorEvent) => {
    logger.debug(`Caught parse error in file ${event.filename}:`);
    logger.debug(`${event.error.stack}`);
})

