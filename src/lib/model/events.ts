import { BaseNode, SuiteNode, TestNode } from "./nodes";
import { BaseResult } from "./results";

/**
 * Minimal shim for older node support
 */
export class Event {
    public defaultPrevented = false;
    constructor(public type: string) {

    }
    preventDefault() {
        this.defaultPrevented = true;
    }
}

export enum EventNames {
    STDOUT = "stdout",
    STDERR = "stderr",
    NEW_SUITE = "suite.new",
    NEW_TEST = "test.new",
    PARSE_ERROR = "parser.error",
    BEFORE_SUITE_START = "suite.before",
    BEFORE_TEST_START = "test.before",
    SUITE_COMPLETED = "suite.completed",
    TEST_COMPLETED = "test.completed",
    MANAGER_RESULT = "manager.result",
};

/**
 * This event is emitted when the worker thread writes to stdout.
 */
export class StdoutEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode,
        public data: string,
    ) {
        super(EventNames.STDOUT);
    }
}

/**
 * This event is emitted when the worker thread writes to stderr.
 */
export class StderrEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode,
        public data: string,
    ) {
        super(EventNames.STDERR);
    }
}

/**
 * This event is emitted when the parser finds a new suite (a `describe()` block).
 */
export class NewSuiteEvent extends Event {

    constructor(
        public filename: string,
        public node: SuiteNode
    ) {
        super(EventNames.NEW_SUITE);
    }
}

/**
 * This event is emitted when the parser finds a new test (an `it()` block).
 */
export class NewTestEvent extends Event {

    constructor(
        public filename: string,
        public node: TestNode
    ) {
        super(EventNames.NEW_TEST);
    }
}

/**
 * This event is emitted when the parser encounters an error,
 * e.g. an error thrown from inside the describe() block or from global scope.
 */
export class ParseErrorEvent extends Event {

    constructor(
        public filename: string,
        public error: Error,
    ) {
        super(EventNames.PARSE_ERROR);
    }
}

/**
 * This event is emitted before each suite is run.
 */
export class BeforeSuiteStartEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode
    ) {
        super(EventNames.BEFORE_SUITE_START);
    }
}

/**
 * This event is emitted before each test is run.
 */
export class BeforeTestStartEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode
    ) {
        super(EventNames.BEFORE_TEST_START);
    }
}

/**
 * This event is emitted when a test completes.
 * 
 * To get the success/failure status, examine `node.state.status` (See {@link !lib/model/nodes.TestStatus}).
 */
export class TestCompletedEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode
    ) {
        super(EventNames.TEST_COMPLETED);
    }
}

/**
 * This event is emitted when a suite completes.
 * 
 * To get the success/failure status, examine `node.state.status` (See {@link !lib/model/nodes.TestStatus}).
 */
export class SuiteCompletedEvent extends Event {

    constructor(
        public filename: string,
        public node: BaseNode
    ) {
        super(EventNames.SUITE_COMPLETED);
    }
}

/**
 * This event is emitted by the manager thread when it receives a test result.
 */
export class ManagerResultEvent extends Event {

    constructor(
        public result: BaseResult
    ) {
        super(EventNames.MANAGER_RESULT);
    }
}