import { logger } from "../../../src/lib/util/logging";

console.log(`Inside spec`);

describe("simple suite", () => {
    it("simple sync test case", () => {
        logger.debug(`Inside simple sync test case`);
    });

    it("simple async test case", async () => {
        logger.debug(`Inside simple async test case`);
    });

});