console.log(`Inside suites unit test`);

import assert from 'assert';
import { TestNode, SuiteNode } from '../../src/lib/model/nodes';
import { Parser } from '../../src/lib/parser';
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

export async function testAddSuites() {

    const config = new Config();
    const testContext = new Context(config);
    testContext.currentFile = new SuiteNode(
        {
            name: "dummy file",
        }
    );
    const testParser = new Parser(testContext)
    const suiteName = "test file";
    let suiteParsed = false;
    let suiteParsedName = "";
    const root = new SuiteNode(
        {
            name: suiteName,
            parse: () => {
                console.log(`Inside suite parse()`);
                suiteParsed = true;
                suiteParsedName = testContext.currentNode.name;
            },
        }
    );
    await testParser.parse(root);

    assert(suiteParsed);
    assert.strictEqual(suiteParsedName, suiteName);

    // dummy callback that does nothing
    const dummyCB = () => { };

    testParser.addSuite("first suite", dummyCB);
    testParser.addSuite("second suite", dummyCB);

    assert.strictEqual(root.children.length, 2, `should be 2 top-level test nodes, got ${testContext.currentFile?.children.length}`);
    assert.strictEqual(root.children[0].name, "first suite");
    assert.strictEqual(root.children[1].name, "second suite");
}

export async function testParseSuites() {

    let root_called = 0;
    let sync_suite_called = 0;
    let async_suite_called = 0;
    let suite_with_1_test_called = 0;
    let nested_suite_parent_called = 0;
    let nested_suite_called = 0;
    let test1_called = 0;
    let nested_suite_test_called = 0;
    let top_sync_test_called = 0;
    let top_async_test_called = 0;
    const root = new SuiteNode({
        name: "root",
        parse: () => { console.log(`inside root suite`); root_called++; },
        children: [
            new TestNode({
                name: "top level sync test",
                run: () => { top_sync_test_called++; }
            }),
            new TestNode({
                name: "top level sync test",
                run: async () => { top_async_test_called++; }
            }),
            new SuiteNode({
                name: "sync suite with no tests",
                parse: () => { console.log(`inside sync suite`); sync_suite_called++; },
            }),
            new SuiteNode({
                name: "async suite with no tests",
                parse: () => { async_suite_called++; },
            }),
            new SuiteNode({
                name: "suite with 1 test",
                parse: () => { suite_with_1_test_called++; },
                children: [
                    new TestNode({
                        name: "test1 inside suite1",
                        run: () => { test1_called++; }
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
    console.log(`Inside test, Root children ${root.children.length}`);
    const config = new Config();
    const testContext = new Context(config);
    testContext.currentFile = new SuiteNode(
        {
            name: "dummy file",
        }
    );
    const testParser = new Parser(testContext);
    await testParser.parse(root);

    // runAllSpecs runs all test nodes, not suite nodes
    assert.strictEqual(root_called, 1, "root suite should have been called");
    assert.strictEqual(sync_suite_called, 1, "sync suite should have been called");
    assert.strictEqual(async_suite_called, 1, "async suite should have been called");
    assert.strictEqual(suite_with_1_test_called, 1, "suite with 1 test should have been called");
    assert.strictEqual(test1_called, 0, "test 1 should not have been called");
    assert.strictEqual(nested_suite_parent_called, 1, "nested suite parent should have been called");
    assert.strictEqual(nested_suite_called, 1, "nested suite should have been called");
    assert.strictEqual(nested_suite_test_called, 0, "nested suite test should not have been called");
    assert.strictEqual(top_sync_test_called, 0, "top sync test should not have been called");
    assert.strictEqual(top_async_test_called, 0, "top async test should not have been called");
}
