import { ConsoleLogger } from '@bchance/yerb';

const logger = new ConsoleLogger();

describe("sync test suite", () => {
    logger.debug(`Inside sync test suite`);
    it("sync test case", () => {
        logger.debug(`Inside sync test spec`);
    });
});

describe("async test suite", async () => {
    logger.debug(`Inside async test suite`);
    it("async test case", async () => {
        logger.debug(`Inside async test spec`);
    });
});

describe("nested test suite", () => {
    logger.debug(`Inside outer test suite`);
    it("outer test case", async () => {
        logger.debug(`Inside outer test spec`);
    });

    describe("inner test suite", () => {
        logger.debug(`Inside inner test suite`);
        it("inner test case", async () => {
            logger.debug(`Inside test spec`);
        });

    });
});
console.log(`Done with example spec (user application scope)`);