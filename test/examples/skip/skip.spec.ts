import assert from 'assert';
import { getTestProcessor } from '../../../src/lib/test-processor';

const testProcessor = getTestProcessor();
console.log(`Inside example spec (global scope)`);
console.log(` -> current node = ${testProcessor.context.currentNode?.name}`);

describe("sync test suite", () => {
    console.log(`Inside sync test suite here`);
    console.log(` -> current node = ${testProcessor.context.currentNode?.name}`);
    assert.strictEqual(testProcessor.context.currentNode?.name, "sync test suite");
    it("sync test case", () => {
        console.log(`Inside sync test spec`);
        console.log(` -> current node = ${testProcessor.context.currentNode?.name}`);
        assert.strictEqual(testProcessor.context.currentNode?.name, "sync test case");

        return "sync spec return value";
    });

    return "sync suite return value";
});

describe("suite with setup and teardown", () => {
    beforeAll(() => {
        console.log(`Inside beforeAll`);
    });

    it("test 1 with setup and teardown", () => {
        console.log(`Inside test 1`);
    });
    it("test 2 with setup and teardown", () => {
        console.log(`Inside test 2`);
    });

});

describe.skip("skipped suite", () => {
    describe("nested suite in skipped suite", () => { });
    it("test in skipped suite", () => { });
});

describe("suite with nested skipped suite", () => {
    describe.skip("nested skipped suite", () => {
        it("test in skipped suite", () => { });
    });
});

describe("suite with skipped test", () => {
    it.skip("skipped test", () => { });
});

describe("async test suite", async () => {
    console.log(`Inside async test suite`);
    console.log(` -> current node = ${testProcessor.context.currentNode?.name}`);
    it("async test case", async () => {
        console.log(`Inside async test spec`);
        console.log(` -> current node = ${testProcessor.context.currentNode?.name}`);

        return "async spec return value";

    });

    return "async suite return value";
});
