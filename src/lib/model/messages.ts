import { TestState, BaseNode } from './nodes';

/**
 * Messages sent between the worker thread and the manager thread.
 * 
 * @packageDocumentation
 */
export class BaseMessage {

    static MSG_TYPE: string = "";

    msgType: string = "";

    constructor() {
        this.msgType = (this.constructor as any).MSG_TYPE;
    }
}

/**
 * Message indicating a worker is ready to process tests.
 * After the manager thread receives this, it should send a {@link ProcessSpecFileMessage}.
 */
export class WorkerReadyMessage extends BaseMessage {

    static MSG_TYPE: string = "workerReady";

    constructor() {
        super();
    }
}

/**
 * Message from manager to pass a list of spec files for the worker to process.
 */
export class ProcessSpecFileMessage extends BaseMessage {

    static MSG_TYPE: string = "processSpecFile";

    constructor(
        public specFileNames: string[]
    ) {
        super();
    }
}

/**
 * Message from {@link !lib/parser.Parser} sent by worker after a suite has been parsed.
 * 
 * ie. after a `describe()` block has been found.
 */
export class ParsedSuiteMessage extends BaseMessage {

    static MSG_TYPE: string = "parsedSuite";

    constructor(
        public filename: string,
        public node: BaseNode,
        public parentNodeId: number
    ) {
        super();
    }
}

/**
 * Message from {@link !lib/parser.Parser} sent by worker after a test has been parsed.
 * 
 * ie. after an `it()` block has been found.
 */
export class ParsedTestMessage extends BaseMessage {

    static MSG_TYPE: string = "parsedTest";

    constructor(
        public filename: string,
        public node: BaseNode,
        public parentNodeId: number
    ) {
        super();
    }
}

/**
 * Message from {@link !lib/runner.Runner} sent by worker after a test has been run.
 */
export class NodeResultMessage extends BaseMessage {

    static MSG_TYPE: string = "nodeResult";

    constructor(
        public filename: string,
        public testId: number,
        public result: TestState,
        public errors: string[]
    ) {
        super();
    }
}

/**
 * Message from {@link !lib/parser.Parser} or {@link !lib/runner.Runner} whenever data is written to stdout from the test.
 */
export class StdoutMessage extends BaseMessage {

    static MSG_TYPE: string = "stdout";

    constructor(
        public filename: string,
        public testId: number,
        public data: string
    ) {
        super();
    }
}

/**
 * Message from {@link !lib/parser.Parser} or {@link !lib/runner.Runner} whenever data is written to stderr from the test.
 */
export class StderrMessage extends BaseMessage {

    static MSG_TYPE: string = "stderr";

    constructor(
        public filename: string,
        public testId: number,
        public data: string
    ) {
        super();
    }
}