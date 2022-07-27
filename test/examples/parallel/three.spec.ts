import { sleep } from '../../../src/lib/util/sleep';
import { ConsoleLogger } from '../../../src/lib/util/logging';

const logger = new ConsoleLogger();
logger.debug(`Inside three.spec global cope`);

describe("Suite 3", () => {
    const delayMs = 1000;
    it("test case A", async () => {
        logger.debug(`Inside suite 3, test case A, sleeping ${delayMs}ms ...`);
        await sleep(delayMs);
        logger.debug(`Inside suite 3, test case A, done sleeping`);
    });

    it("test case B", async () => {
        logger.debug(`Inside suite 3, test case B, sleeping ${delayMs}ms ...`);
        await sleep(delayMs);
        logger.debug(`Inside suite 3, test case B, done sleeping`);
    });

});