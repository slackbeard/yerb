console.log(`Inside runner unit test`);

import assert from 'assert';
import { TestNode, SuiteNode } from '../../src/lib/model/nodes';
import { Runner } from '../../src/lib/runner';
import { Context } from '../../src/lib/model/context';
import { Config } from '../../src';

async function sleep(ms: number) {
    return new Promise((res: any) => {
        setTimeout(res, ms);
    });
}

export async function testRunAllTests() {

    let currentIndex = 1;

    const root = new SuiteNode({
        name: "root",
        children: [
            new TestNode({
                name: "top level sync test",
                run: () => {
                    assert.equal(currentIndex, 1);
                    currentIndex++;
                }
            }),
            new TestNode({
                name: "top level async test",
                run: () => {
                    assert.equal(currentIndex, 2);
                    currentIndex++;
                }
            }),
            new SuiteNode({
                name: "suite with 1 test",
                children: [
                    new TestNode({
                        name: "test1 inside suite1",
                        run: () => {
                            assert.equal(currentIndex, 3);
                            currentIndex++;
                        }
                    })
                ]
            }),
            new SuiteNode({
                name: "suite with nested suite",
                children: [
                    new SuiteNode({
                        name: "nested suite",
                        children: [
                            new TestNode({
                                name: "test inside nested suite",
                                run: () => {
                                    assert.equal(currentIndex, 4);
                                    currentIndex++;
                                }
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
    assert.strictEqual(currentIndex, 5);
}

export async function testRunWithDelays() {

    let currentIndex = 1;
    const delayMs = 100;

    console.log(`Inside testRunWithDelays...`);
    const root = new SuiteNode({
        name: "root",
        children: [
            new TestNode({
                name: "top level delay test",
                run: async () => {
                    console.log(`Inside test, currentIndex=${currentIndex}...`);
                    await sleep(delayMs);
                    assert.equal(currentIndex, 1);
                    await sleep(delayMs);
                    currentIndex++;
                    await sleep(delayMs);
                }
            }),
            new SuiteNode({
                name: "suite with 1 test",
                children: [
                    new TestNode({
                        name: "test1 inside suite1",
                        run: async () => {
                            console.log(`Inside test, currentIndex=${currentIndex}...`);
                            sleep(delayMs);
                            assert.equal(currentIndex, 2);
                            await sleep(delayMs);
                            currentIndex++;
                            await sleep(delayMs);
                        }
                    })
                ]
            }),
            new SuiteNode({
                name: "suite with nested suite",
                children: [
                    new SuiteNode({
                        name: "nested suite",
                        children: [
                            new TestNode({
                                name: "test inside nested suite",
                                run: async () => {
                                    console.log(`Inside test, currentIndex=${currentIndex}...`);
                                    await sleep(delayMs);
                                    assert.equal(currentIndex, 3);
                                    await sleep(delayMs);
                                    currentIndex++;
                                    await sleep(delayMs);
                                }
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

    console.log(`About to run test tree...`);
    await sleep(delayMs);
    await testRunner.run(root);
    await sleep(delayMs);
    console.log(`After run(). Verifying currentIndex ...`);

    // runAllSpecs runs all test nodes, not suite nodes
    assert.strictEqual(currentIndex, 4);
}