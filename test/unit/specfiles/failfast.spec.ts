import assert from "assert";

describe("Failfast Suite", () => {
    it("Failfast test 1", async () => {
    });
    it("Failfast test 2", async () => {
        assert.strictEqual(true, false, "Intentionally failing test");
    });
    it("Failfast test 3", async () => {
    });
});