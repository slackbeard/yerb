console.log(`Inside spec init script`);

import { TestCompletedEvent } from '../../../src/lib/model/events';
import { TestStatus } from '../../../src/lib/model/nodes';
import { getTestProcessor } from '../../../src/lib/test-processor';

let testProcessor = getTestProcessor();

testProcessor.onTestCompleted(async (event: TestCompletedEvent) => {

    console.log(`Inside onTestCompleted, test name: ${event.node.name}`);

    // Check if this test failed:
    if (event.node.state.status == TestStatus.FAILED) {

        // Fail the immediate parent suite 
        // (for nested suites, you can continue up the node tree)
        if (event.node.parent) {
            event.node.parent.fail(new Error("Failing fast due to previous failures"));
        }
    }
});