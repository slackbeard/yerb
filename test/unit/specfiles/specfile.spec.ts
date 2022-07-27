console.log(`Inside specfile global scope`);
describe("Suite", () => {
    console.log(`Inside specfile describe()`);
    it("Async Test", async () => {
        console.log(`Inside async test`);
    });

    it("Sync Test", async () => {
        console.log(`Inside sync test`);
    });
});