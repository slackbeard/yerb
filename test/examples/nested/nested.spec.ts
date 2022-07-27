import { getTestProcessor } from '../../../src/lib/test-processor';

const testProcessor = getTestProcessor();
describe("outer suite - sync", () => {
    console.log(`Parsing suite: ${testProcessor.context.currentNode.name}`);
    describe("nested suite - sync - no tests", () => {
        console.log(`Parsing suite: ${testProcessor.context.currentNode.name}`);
    });
    describe("nested suite - async - no tests", async () => {
        console.log(`Parsing suite: ${testProcessor.context.currentNode.name}`);
    });
    describe("nested suite - sync - with tests", () => {
        console.log(`Parsing suite: ${testProcessor.context.currentNode.name}`);

        it("nested test - sync", () => {
            console.log(`Running suite: ${testProcessor.context.currentNode.parent?.name}`);
            console.log(`Running test: ${testProcessor.context.currentNode.name}`);
        });

        it("nested test - async", async () => {
            console.log(`Running suite: ${testProcessor.context.currentNode.parent?.name}`);
            console.log(`Running test: ${testProcessor.context.currentNode.name}`);
        });
    });
    describe("nested suite - async - with tests", async () => {
        console.log(`Parsing suite: ${testProcessor.context.currentNode.name}`);

        it("nested test - sync", () => {
            console.log(`Running suite: ${testProcessor.context.currentNode.parent?.name}`);
            console.log(`Running test: ${testProcessor.context.currentNode.name}`);
        });

        it("nested test - async", async () => {
            console.log(`Running suite: ${testProcessor.context.currentNode.parent?.name}`);
            console.log(`Running test: ${testProcessor.context.currentNode.name}`);
        });
    });
});
