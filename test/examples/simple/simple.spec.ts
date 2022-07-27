import { ConsoleLogger } from "../../../src/lib/util/logging";
import { getTestProcessor } from "../../../src/lib/test-processor";

const logger = new ConsoleLogger();
logger.debug(`Inside empty spec`);

const testProcessor = getTestProcessor();

describe("simple suite", () => {
    logger.debug(`Hello from '${testProcessor.context.currentNode.name}'`);

    it("simple sync test case", () => {
        logger.debug(`Hello from '${testProcessor.context.currentNode.name}'`);
    });

    it("simple async test case", async () => {
        logger.debug(`Hello from '${testProcessor.context.currentNode.name}'`);
    });

});