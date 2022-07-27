import { ConsoleLogger } from '../../../src/lib/util/logging';

const logger = new ConsoleLogger();

describe("Suite", () => {
    it("test case A", async () => {
        logger.debug(`Inside test case A`);
    });

    throw new Error("Intentionally thrown error");

    it("test case B", async () => {
        logger.debug(`Inside test case B`);
    });

});