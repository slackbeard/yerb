import { AsyncEventTarget } from './model/async-event-target';
import { Context } from './model/context';
import { EventNames, TestCompletedEvent, SuiteCompletedEvent, BeforeTestStartEvent, BeforeSuiteStartEvent, StdoutEvent, StderrEvent } from './model/events';
import { TestNode, SuiteNode, BaseNode, TestStatus } from './model/nodes';
import { logger } from './util/logging';

/**
 * The Runner runs tests and reports their results via events.
 * 
 */
export class Runner extends AsyncEventTarget {

    public context: Context;

    public onBeforeSuiteStart(callback: (event: BeforeSuiteStartEvent) => any) {
        this.addEventListener(EventNames.BEFORE_SUITE_START, callback);
    }

    public onBeforeTestStart(callback: (event: BeforeTestStartEvent) => any) {
        this.addEventListener(EventNames.BEFORE_TEST_START, callback);
    }

    public onTestCompleted(callback: (event: TestCompletedEvent) => any) {
        this.addEventListener(EventNames.TEST_COMPLETED, callback);
    }

    public onSuiteCompleted(callback: (event: SuiteCompletedEvent) => any) {
        this.addEventListener(EventNames.SUITE_COMPLETED, callback);
    }

    public onStdout(callback: (event: StdoutEvent) => any) {
        return this.addEventListener(EventNames.STDOUT, callback);
    }

    public onStderr(callback: (event: StderrEvent) => any) {
        return this.addEventListener(EventNames.STDERR, callback);
    }


    constructor(context: Context, init: Partial<Runner> = {}) {
        super();
        this.context = context;
        Object.assign(this, init);
    }

    public async run(root: SuiteNode): Promise<any> {

        const invalidSuiteDecl = () => {
            throw new Error("Suites can't be defined from inside a test ('describe()' can't be called inside 'it()')");
        }
        const invalidTestDecl = () => {
            throw new Error("Tests can't be defined inside other tests ('it()' can't be called inside 'it()')");
        }
        const invalidSetup = () => {
            throw new Error("Test setup/teardown functions can't be defined from inside a test");
        }
        (global as any).describe = invalidSuiteDecl;
        (global as any).describe.skip = invalidSuiteDecl;
        (global as any).it = invalidTestDecl;
        (global as any).it.skip = invalidTestDecl;
        (global as any).beforeAll = invalidSetup;
        (global as any).afterAll = invalidSetup;
        (global as any).beforeEach = invalidSetup;
        (global as any).afterEach = invalidSetup;

        this.context.currentNode = root;
        return await this.runNode(this.context.currentNode, [], []);
    }

    public async runNode(node: BaseNode, setups: any[], teardowns: any[]): Promise<any> {

        // only run the test if it doesn't already have a status (passed, failed, skipped)
        if (node.state.status != TestStatus.INIT) {
            return;
        }

        const previousNode = this.context.currentNode;
        this.context.currentNode = node;

        if (node instanceof SuiteNode) {

            await this.runSuite(node, setups, teardowns);

        } else if (node instanceof TestNode) {

            await this.runTest(node, setups, teardowns);

        }

        this.context.currentNode = previousNode;
    }

    public async runSuite(node: SuiteNode, beforeEachCallbacks: any[], afterEachCallbacks: any[]): Promise<any> {

        try {
            const suiteStartEvent = new BeforeSuiteStartEvent(this.context.currentFile!.name, node);
            await this.dispatchEvent(suiteStartEvent);
            if (suiteStartEvent.defaultPrevented) {
                return;
            }

            for (const beforeAllCallback of node.beforeAllCallbacks) {
                await beforeAllCallback();
            }

            let suiteFailed = false;
            for (const child of node.children) {

                if (this.context.config!.inheritSetupAndTeardown) {
                    const allSetups = [...beforeEachCallbacks, ...node.beforeEachCallbacks];
                    const allTeardowns = [...afterEachCallbacks, ...node.afterEachCallbacks];
                    await this.runNode(child, allSetups, allTeardowns);
                } else {
                    await this.runNode(child, node.beforeEachCallbacks, node.afterEachCallbacks);
                }

                if (child.state.status == TestStatus.FAILED) {
                    suiteFailed = true;
                }
            }

            if (suiteFailed) {
                node.state.status = TestStatus.FAILED;
            } else {
                node.state.status = TestStatus.PASSED;
            }

        } catch (err: any) {
            logger.error(`Suite failed: ${err.stack}`);
            node.fail(err);
        }

        try {
            for (const afterAllCallback of node.afterAllCallbacks) {
                await afterAllCallback();
            }
        } catch (err: any) {
            logger.error(`Suite failed: ${err.stack}`);
            node.state.status = TestStatus.FAILED;
        }

        await this.dispatchEvent(
            new SuiteCompletedEvent(
                this.context.currentFile!.name,
                node
            )
        );

    }

    public notifyStdoutEvent(data: string, encoding: any, fd: any) {
        this.dispatchEvent(
            new StdoutEvent(
                this.context.currentFile!.name,
                this.context.currentNode,
                data
            )
        );
    }

    public notifyStderrEvent(data: string, encoding: any, fd: any) {
        this.dispatchEvent(
            new StderrEvent(
                this.context.currentFile!.name,
                this.context.currentNode,
                data
            )
        );
    }

    public async runTest(node: TestNode, beforeEachCallbacks: any[], afterEachCallbacks: any[]): Promise<any> {

        const oldStdout = process.stdout.write;
        const oldStderr = process.stderr.write;
        try {
            const testStartEvent = new BeforeTestStartEvent(this.context.currentFile!.name, node);
            await this.dispatchEvent(testStartEvent);
            if (testStartEvent.defaultPrevented) {
                return;
            }

            for (const setup of beforeEachCallbacks) {
                await setup();
            }

            (process as any).stdout.write = this.notifyStdoutEvent.bind(this);
            (process as any).stderr.write = this.notifyStderrEvent.bind(this);

            await node.run();

            process.stdout.write = oldStdout;
            process.stderr.write = oldStderr;

            node.state.status = TestStatus.PASSED;

        } catch (err: any) {
            process.stdout.write = oldStdout;
            process.stderr.write = oldStderr;
            logger.error(`Test failed: ${err.stack}`);
            node.fail(err);
        }

        try {

            for (const teardown of afterEachCallbacks) {
                await teardown();
            }

        } catch (err: any) {
            logger.error(`Test failed: ${err.stack}`);
            node.fail(err);
        }

        await this.dispatchEvent(
            new TestCompletedEvent(
                this.context.currentFile!.name,
                node
            )
        );

    }

};