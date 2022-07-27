console.log(`Inside runner unit test`);

import assert from 'assert';
import { TestNode, SuiteNode, TestStatus } from '../../src/lib/model/nodes';
import { Runner } from '../../src/lib/runner';
import { Context } from '../../src/lib/model/context';
import { Config } from '../../src';

export async function testFailTest() {
    const root = new SuiteNode({ name: "root" });
    const passTest = new TestNode(
        {
            name: "passTest",
            run: () => {
            }
        }
    );
    const failTest = new TestNode(
        {
            name: "failTest",
            run: () => {
                throw new Error(`thrown error from inside function`);
            }
        }
    );
    root.addChild(passTest);
    root.addChild(failTest);

    const config = new Config();
    const context = new Context(config);
    context.currentFile = new SuiteNode(
        {
            name: "dummy file",
        }
    );
    const runner = new Runner(context);
    console.log(`Calling run()...`);
    await runner.run(root);

    console.log(`Verifying failTest actually failed...`);
    assert.strictEqual(passTest.state.status, TestStatus.PASSED);
    assert.strictEqual(failTest.state.status, TestStatus.FAILED);
    assert.strictEqual(root.state.status, TestStatus.FAILED);

}