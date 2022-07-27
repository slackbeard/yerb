console.log(`Inside suites unit test`);

import path from 'path';
import assert from 'assert';
import { SuiteNode, TestStatus } from '../../src/lib/model/nodes';
import { TestProcessor } from '../../src/lib/test-processor';
import { Config } from '../../src/lib/model/config';
import { BeforeTestStartEvent, NewSuiteEvent, NewTestEvent, TestCompletedEvent } from '../../src/lib/model/events';

async function sleep(ms: number) {
    return new Promise((res: any) => {
        setTimeout(res, ms);
    });
}

export async function testSequence() {
    const config = new Config();
    const testProcessor = new TestProcessor(config);
    let sequence = 0;
    const sleepMs = 100;
    testProcessor.onNewSuite(async (event: NewSuiteEvent) => {
        console.log(`Inside onNewSuite, new suite name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 1;
        console.log(`Leaving onNewSuite, new suite name: "${event.node.name}"`);
    });

    testProcessor.onNewTest(async (event: NewTestEvent) => {
        console.log(`Inside onNewTest, new test name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 2;
        console.log(`Leaving onNewTest, new test name: "${event.node.name}"`);
    });

    testProcessor.onBeforeSuiteStart(async (event: TestCompletedEvent) => {
        console.log(`Inside onBeforeSuiteStart, node name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 3;
        console.log(`Leaving onBeforeSuiteStart, node name: "${event.node.name}"`);
    });

    testProcessor.onBeforeTestStart(async (event: TestCompletedEvent) => {
        console.log(`Inside onBeforeTestStart, node name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 4;
        console.log(`Leaving onBeforeTestStart, node name: "${event.node.name}"`);
    });

    testProcessor.onTestCompleted(async (event: TestCompletedEvent) => {
        console.log(`Inside onTestCompleted, node name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 5;
        console.log(`Leaving onTestCompleted, node name: "${event.node.name}"`);
    });

    testProcessor.onSuiteCompleted(async (event: TestCompletedEvent) => {
        console.log(`Inside onSuiteCompleted, node name: "${event.node.name}"`);
        await sleep(sleepMs);
        sequence = sequence * 10 + 6;
        console.log(`Leaving onSuiteCompleted, node name: "${event.node.name}"`);
    });

    const specPath = path.join(__dirname, 'specfiles', 'specfile.spec.ts');
    console.log(`Spec file path: ${specPath}`);
    await testProcessor.processSpecFile(specPath);

    assert.strictEqual(sequence, 112233454566);
}

export async function testFailFast() {
    const config = new Config();
    const testProcessor = new TestProcessor(config);
    let suiteFailed = false;

    testProcessor.onBeforeTestStart(async (event: BeforeTestStartEvent) => {
        if (suiteFailed) {
            throw new Error("Failed due to previous errors");
        }
    });

    testProcessor.onTestCompleted(async (event: TestCompletedEvent) => {
        if (event.node.state.status == TestStatus.FAILED) {
            suiteFailed = true;
        }
    });

    const specPath = path.join(__dirname, 'specfiles', 'failfast.spec.ts');
    console.log(`Spec file path: ${specPath}`);
    const rootNode = await testProcessor.processSpecFile(specPath);

    console.log(`Verifying test results ...`);
    assert.strictEqual(rootNode.state.status, TestStatus.FAILED);
    const suiteNode = rootNode.children[0] as SuiteNode;
    assert.strictEqual(suiteNode.state.status, TestStatus.FAILED);
    assert.strictEqual(suiteNode.children[0].state.status, TestStatus.PASSED);
    assert.strictEqual(suiteNode.children[1].state.status, TestStatus.FAILED);
    assert.strictEqual(suiteNode.children[2].state.status, TestStatus.FAILED);

}
