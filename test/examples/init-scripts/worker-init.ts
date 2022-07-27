console.log(`Inside spec init script`);

import { TestCompletedEvent } from '../../../src/lib/model/events';
import { getTestProcessor } from '../../../src/lib/test-processor';
import { sleep } from '../../../src/lib/util/sleep';

let testProcessor = getTestProcessor();

testProcessor.onBeforeSuiteStart(async () => {
    console.log(`Inside onBeforeSuiteStart, sleeping...`);
    await sleep(100);
    console.log(`Leaving onBeforeSuiteStart`);
});

testProcessor.onTestCompleted(async (event: TestCompletedEvent) => {
    console.log(`Inside onTestCompleted, test name: ${event.node.name}, sleeping...`);
    await sleep(100);
    console.log(`Leaving onTestCompleted, test name: ${event.node.name}`);
});