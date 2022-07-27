console.log(`Inside runner unit test`);

import assert from 'assert';
import { TestNode, SuiteNode, TestStatus } from '../../src/lib/model/nodes';
import { Runner } from '../../src/lib/runner';
import { Context } from '../../src/lib/model/context';
import { Config } from '../../src';

export async function testAddNodes() {
    const subSuiteName = "sub suite";
    const subTestName = "sub test";
    const subsubSuiteName = "sub sub suite";

    const root = new SuiteNode({ name: "root" });
    assert.strictEqual(root.children.length, 0, "TestSuite should be initialized with 0 children");

    const node1 = new SuiteNode({ name: subSuiteName })
    root.addChild(node1);
    assert.strictEqual(root.children.length, 1, "After adding sub suite, root suite should have 1 child");
    assert.strictEqual(node1.parent, root, "sub suite's parent should be root")

    const node2 = new TestNode({ name: subTestName })
    root.addChild(node2);
    assert.strictEqual(root.children.length, 2, "After adding sub test, root suite should have 2 children");

    const node3 = new SuiteNode({ name: subsubSuiteName })
    node1.addChild(node3);

    // verify tree structure
    assert.strictEqual(root.name, "root", "root name should be root");
    assert.strictEqual(root.children[0].name, subSuiteName, "root child[0]'s name should be suite1");
    assert.strictEqual(root.children[1].name, subTestName, "root child[1]'s name should be suite3");
    assert.strictEqual((root.children[0] as SuiteNode).children[0].name, subsubSuiteName, "suite1 child[0]'s name should be suite2");
}

export async function testRunAllTests() {

    let root_called = 0;
    let sync_suite_called = 0;
    let async_suite_called = 0;
    let suite_with_1_test_called = 0;
    let nested_suite_parent_called = 0;
    let nested_suite_called = 0;
    let suite_test_called = 0;
    let nested_suite_test_called = 0;
    let top_sync_test_called = 0;
    let top_async_test_called = 0;

    const root = new SuiteNode({
        name: "root",
        parse: () => { root_called++; },
        children: [
            new TestNode({
                name: "top level sync test",
                run: () => { top_sync_test_called++; }
            }),
            new TestNode({
                name: "top level async test",
                run: async () => { top_async_test_called++; }
            }),
            new SuiteNode({
                name: "sync suite with no tests",
                parse: () => { sync_suite_called++; },
            }),
            new SuiteNode({
                name: "async suite with no tests",
                parse: async () => { async_suite_called++; },
            }),
            new SuiteNode({
                name: "suite with 1 test",
                parse: () => { suite_with_1_test_called++; },
                children: [
                    new TestNode({
                        name: "test1 inside suite1",
                        run: () => { suite_test_called++; }
                    })
                ]
            }),
            new SuiteNode({
                name: "suite with nested suite",
                parse: () => { nested_suite_parent_called++; },
                children: [
                    new SuiteNode({
                        parse: () => { nested_suite_called++; },
                        name: "nested suite",
                        children: [
                            new TestNode({
                                name: "test inside nested suite",
                                run: () => { nested_suite_test_called++; }
                            })
                        ]
                    }
                    )
                ]
            }),
        ]
    });
    const config = new Config();
    const testContext = new Context(config);
    testContext.currentFile = new SuiteNode(
        {
            name: "dummy file",
        }
    );
    const testRunner = new Runner(testContext);

    await testRunner.run(root);

    // runAllSpecs runs all test nodes, not suite nodes
    assert.strictEqual(root_called, 0, "root suite should not have been called");
    assert.strictEqual(top_sync_test_called, 1, "top sync test should have been called");
    assert.strictEqual(top_async_test_called, 1, "top async test should have been called");
    assert.strictEqual(sync_suite_called, 0, "sync suite should not have been called");
    assert.strictEqual(async_suite_called, 0, "async suite should not have been called");
    assert.strictEqual(suite_with_1_test_called, 0, "suite with 1 test should not have been called");
    assert.strictEqual(suite_test_called, 1, "test 1 should have been called");
    assert.strictEqual(nested_suite_parent_called, 0, "nested suite parent should not have been called");
    assert.strictEqual(nested_suite_called, 0, "nested suite should not have been called");
    assert.strictEqual(nested_suite_test_called, 1, "nested suite test should have been called");
}

export async function testFailBeforeAll() {

    let suite_test_called = 0;
    let top_sync_test_called = 0;
    let top_async_test_called = 0;

    const root = new SuiteNode({
        name: "root",
        children: [
            new TestNode({
                name: "top level sync test",
                run: () => { top_sync_test_called++; }
            }),
            new TestNode({
                name: "top level async test",
                run: async () => { top_async_test_called++; }
            }),
            new SuiteNode({
                name: "suite with 1 test",
                children: [
                    new TestNode({
                        name: "test1 inside suite1",
                        run: () => { suite_test_called++; }
                    })
                ]
            }),
        ]
    });
    const errorMessage = "Intentionally failing in beforeAll";
    root.beforeAll(() => {
        throw new Error(errorMessage);
    })
    const config = new Config();
    const testContext = new Context(config);
    testContext.currentFile = new SuiteNode(
        {
            name: "dummy file",
        }
    );
    const testRunner = new Runner(testContext);

    await testRunner.run(root);

    // runAllSpecs runs all test nodes, not suite nodes
    assert.strictEqual(top_sync_test_called, 0, "top sync test should not have been called");
    assert.strictEqual(top_async_test_called, 0, "top async test should not have been called");
    assert.strictEqual(suite_test_called, 0, "test 1 should not have been called");

    assert.strictEqual(root.state.status, TestStatus.FAILED, "Root suite status should be FAILED");
    assert.strictEqual(root.errors.length, 1, "Root suite status should have 1 error");
    assert(root.errors[0].message.includes(errorMessage), `Error should contain '${errorMessage}'`);
    assert.strictEqual(root.children[0].state.status, TestStatus.SKIPPED, "Test status should be SKIPPED");
}