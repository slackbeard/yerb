import { ConsoleLogger } from "../../../src/lib/util/logging";
import assert from "assert";


const logger = new ConsoleLogger();
describe("Failfast Suite", () => {

    it("Failfast test 1", async () => {
        logger.debug(`Inside failfast test 1`);
    });

    it("Failfast test 2", async () => {
        logger.debug(`Inside failfast test 2`);
        assert.strictEqual(true, false, "Intentionally failing test");
    });

    it("Failfast test 3", async () => {
        // This test will be skipped due to previous test's failure
        logger.debug(`Inside failfast test 3`);
    });
});