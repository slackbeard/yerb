import process from 'process';
import { threadId, parentPort, workerData } from 'worker_threads';
import { NodeResultMessage, StdoutMessage, ParsedTestMessage, ParsedSuiteMessage, BaseMessage, ProcessSpecFileMessage, WorkerReadyMessage, StderrMessage } from './model/messages';
import { initTestProcessor } from './test-processor';
import { BaseNode } from './model/nodes';
import { NewSuiteEvent, NewTestEvent, TestCompletedEvent, SuiteCompletedEvent, StdoutEvent, StderrEvent } from './model/events';
import { logger, LogLevel } from './util/logging';


logger.level = LogLevel.INFO;

logger.debug(`Inside Worker thread ID: ${threadId}`);

function notifyNewSuite(filename: string, node: BaseNode) {
    const serializedNode = JSON.parse(JSON.stringify(
        node,
        [
            "name",
            "nodeId",
            "children",
            "state",
            "status",
        ]
    ));
    parentPort?.postMessage(
        new ParsedSuiteMessage(
            filename,
            serializedNode,
            node.parent?.nodeId!
        )
    );
};

function notifyNewTest(filename: string, node: BaseNode) {
    const serializedNode = JSON.parse(JSON.stringify(
        node,
        [
            "name",
            "nodeId",
            "state",
            "status",
        ]
    ));
    parentPort?.postMessage(
        new ParsedTestMessage(
            filename,
            serializedNode,
            node.parent?.nodeId!
        )
    );
};

function notifyStdout(filename: string, nodeId: number, data: any) {
    parentPort?.postMessage(
        new StdoutMessage(
            filename,
            nodeId,
            data
        )
    );
};

function notifyStderr(filename: string, nodeId: number, data: any) {
    parentPort?.postMessage(
        new StderrMessage(
            filename,
            nodeId,
            data
        )
    );
};

function notifyNodeResult(filename: string, node: BaseNode) {
    const errors = node.errors.map((e: Error) => e.stack || e.toString());
    parentPort?.postMessage(
        new NodeResultMessage(
            filename,
            node.nodeId,
            node.state,
            errors
        )
    );
};

function notifyWorkerReady() {
    parentPort?.postMessage(new WorkerReadyMessage());
}

function waitForSpecFileMsg(): Promise<ProcessSpecFileMessage> {
    return new Promise((resolve) => {
        parentPort?.on("message", (msg: BaseMessage) => {
            switch (msg.msgType) {
                case (ProcessSpecFileMessage.MSG_TYPE):
                    const processMsg = msg as ProcessSpecFileMessage;
                    resolve(processMsg);
                    break;
                default:
                    break;
            }
        });
    });
}

(async () => {

    logger.debug(`Started worker with workerData: ${JSON.stringify(workerData, null, 2)}`);

    const testProcessor = initTestProcessor(workerData.config);

    testProcessor.onNewSuite(async (event: NewSuiteEvent) => {
        notifyNewSuite(event.filename, event.node);
    });

    testProcessor.onNewTest(async (event: NewTestEvent) => {
        notifyNewTest(event.filename, event.node);
    });

    testProcessor.onStdout(async (event: StdoutEvent) => {
        notifyStdout(event.filename, event.node.nodeId, event.data);
    });

    testProcessor.onStderr(async (event: StderrEvent) => {
        notifyStderr(event.filename, event.node.nodeId, event.data);
    });

    testProcessor.onTestCompleted(async (event: TestCompletedEvent) => {
        notifyNodeResult(event.filename, event.node);
    });

    testProcessor.onSuiteCompleted(async (event: SuiteCompletedEvent) => {
        notifyNodeResult(event.filename, event.node);
    });

    // tell the manager thread that we're ready
    notifyWorkerReady();


    // Wait for the manager thread to send spec files for us to process:
    logger.debug(`Worker waiting for spec file batch ...`);
    const processMsg = await waitForSpecFileMsg();
    logger.debug(`Worker got spec file batch: ${JSON.stringify(processMsg.specFileNames)}`);


    await testProcessor.processAllSpecFiles(processMsg.specFileNames);

    logger.debug(`Exiting worker ...`);
    process.exitCode = 0;
    // process.exit(0);
    parentPort?.close();

})();