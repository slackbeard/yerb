/**
 * Test and Suite data structures.
 * 
 * A SuiteNode can have 0 or more children.
 * Each child node can be a Suite or Test.
 * 
 * A Test is a leaf node, and does not have children.
 * 
 * A Suite represents a `describe()` block.
 * A Test represents an `it()` block.
 * 
 * @packageDocumentation
 */

export enum TestStatus {
    /**
     * Test has not started yet.
     */
    INIT = 0,

    /**
     * Test passed.
     */
    PASSED,

    /**
     * Test failed. Errors are stored in {@link BaseNode["errors"]}
     */
    FAILED,

    /**
     * Test is (or will be) skipped.
     */
    SKIPPED,
};

export class TestState {
    /**
     * Test status.
     * A test will only be run if its in the `INIT` state.
     */
    public status: TestStatus = TestStatus.INIT;
    public startTime?: Date;
    public endTime?: Date;
}

export class BaseNode {
    public parent?: SuiteNode = undefined;

    /**
     * The current file name & nodeId identify this state for syncing test state between worker & manager
     */
    public nodeId: number = 0;

    /**
     * Test or suite name
     */
    public name: string = "";

    public state: TestState = new TestState();

    /**
     * Errors, if any.
     * 
     * If a suite failed due to child test errors, this may be empty in the suite node.
     * In that case the test node will contain the errors[].
     */
    public errors: Error[] = [];

    /**
     * Force this node to fail 
     * @param err Error object
     */
    public fail(err: any) {
        this.errors.push(err);
        this.state.status = TestStatus.FAILED;
    }

    /**
     * Force this node to skip
     */
    public skip() {
        this.state.status = TestStatus.SKIPPED;
    }
}

export class TestNode extends BaseNode {

    /**
     * This will be assigned to the test function once the test is parsed.
     */
    public run = () => { };

    constructor(init: Partial<TestNode> = {}) {
        super();
        Object.assign(this, init);
    }

};

export class SuiteNode extends BaseNode {

    /**
     * This will be assigned to the describe() body once the suite is parsed.
     */
    public parse = () => { };

    public beforeAllCallbacks: any[] = [];
    public afterAllCallbacks: any[] = [];

    public beforeEachCallbacks: any[] = [];
    public afterEachCallbacks: any[] = [];

    public children: BaseNode[] = [];

    /**
     * Add a beforeAll() callback to be called at the start of a suite.
     * @param callback 
     */
    public beforeAll(callback: any) {
        this.beforeAllCallbacks.push(callback);
    }

    /**
     * Add a beforeEach() callback to be called before each test.
     * The behavior of beforeEach() is controlled by {@link !lib/model/config.Config["inheritSetupAndTeardown"]}
     * 
     * @param callback 
     */
    public beforeEach(callback: any) {
        this.beforeEachCallbacks.push(callback);
    }

    /**
     * Add a afterAll() callback to be called at the end of the suite.
     * 
     * @param callback 
     */
    public afterAll(callback: any) {
        this.afterAllCallbacks.push(callback);
    }

    /**
     * Add a afterEach() callback to be called after each test.
     * The behavior of afterEach() is controlled by {@link !lib/model/config.Config["inheritSetupAndTeardown"]}
     * 
     * @param callback 
     */
    public afterEach(callback: any) {
        this.afterEachCallbacks.push(callback);
    }

    public addChild(node: BaseNode) {
        node.parent = this;
        this.children.push(node);
    }

    /**
     * Force this suite to fail, and skip all pending child nodes.
     * @param err Error
     */
    public fail(err: any) {
        super.fail(err);

        for (let child of this.children) {
            if (child.state.status == TestStatus.INIT) child.skip();
        }
    }

    constructor(init: Partial<SuiteNode> = {}) {
        super();
        Object.assign(this, init);
    }

};
