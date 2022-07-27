import { AsyncEventTarget } from './model/async-event-target';
import { Context } from './model/context';
import { EventNames, NewSuiteEvent, NewTestEvent, ParseErrorEvent, StderrEvent, StdoutEvent } from './model/events';

import {
    TestNode,
    SuiteNode,
    BaseNode,
    TestStatus
} from './model/nodes';
import { logger } from './util/logging';

/**
 * The Parser gathers the suites and tests to be run from a spec file.
 * 
 * Suites are represented as `describe()` blocks in the spec file.
 * 
 * Once all the suites are found at the global scope, the parser recursively runs the suites to find nested suites and tests.
 * 
 * The Parser does not actually run tests, that task is performed by the {@link !lib/runner.Runner} class.
 */
export class Parser extends AsyncEventTarget {

    private context: Context;

    private nextTestId: number = 0;

    public onNewSuite(callback: (event: NewSuiteEvent) => any) {
        this.addEventListener(EventNames.NEW_SUITE, callback);
    }

    public onNewTest(callback: (event: NewTestEvent) => any) {
        this.addEventListener(EventNames.NEW_TEST, callback);
    }

    public onParseError(callback: (event: ParseErrorEvent) => any) {
        this.addEventListener(EventNames.PARSE_ERROR, callback);
    }

    public onStdout(callback: (event: StdoutEvent) => any) {
        return this.addEventListener(EventNames.STDOUT, callback);
    }

    public onStderr(callback: (event: StderrEvent) => any) {
        return this.addEventListener(EventNames.STDERR, callback);
    }


    constructor(context: Context, init: Partial<Parser> = {}) {
        super();
        this.context = context;
        Object.assign(this, init);
    }

    public addSuite(name: string, callback: () => any) {
        let newSuite: SuiteNode = new SuiteNode({
            nodeId: this.nextTestId++,
            name: name,
            parse: callback,
        });
        (this.context.currentNode as SuiteNode).addChild(newSuite);

    }

    public skipSuite(name: string, callback: () => any) {
        let newSuite: SuiteNode = new SuiteNode({
            nodeId: this.nextTestId++,
            name: name,
            // parse: () => { },
            parse: callback,
            state: {
                status: TestStatus.SKIPPED,
            },
        });
        (this.context.currentNode as SuiteNode).addChild(newSuite);

    }

    public addTest(name: string, callback: () => any) {
        let newTest = new TestNode({
            nodeId: this.nextTestId++,
            name: name,
            run: callback,
        });
        (this.context.currentNode as SuiteNode).addChild(newTest);

        return newTest;
    }

    public skipTest(name: string, callback: () => any) {
        let newTest = new TestNode({
            nodeId: this.nextTestId++,
            name: name,
            run: () => { },
            state: {
                status: TestStatus.SKIPPED,
            },
        });
        (this.context.currentNode as SuiteNode).addChild(newTest);

    }

    public beforeAll(callback: () => any) {
        (this.context.currentNode as SuiteNode).beforeAll(callback);
    }

    public afterAll(callback: () => any) {
        (this.context.currentNode as SuiteNode).afterAll(callback);
    }

    public beforeEach(callback: () => any) {
        (this.context.currentNode as SuiteNode).beforeEach(callback);
    }

    public afterEach(callback: () => any) {
        (this.context.currentNode as SuiteNode).afterEach(callback);
    }

    /**
     * Parses a suite and builds a tree of SuiteNode and TestNode objects
     */
    public async parse(root: SuiteNode): Promise<SuiteNode | null> {

        // inject global functions
        (global as any).describe = Parser.prototype.addSuite.bind(this);
        (global as any).describe.skip = Parser.prototype.skipSuite.bind(this);
        (global as any).it = Parser.prototype.addTest.bind(this);
        (global as any).it.skip = Parser.prototype.skipTest.bind(this);
        (global as any).beforeAll = Parser.prototype.beforeAll.bind(this);
        (global as any).afterAll = Parser.prototype.afterAll.bind(this);
        (global as any).beforeEach = Parser.prototype.beforeEach.bind(this);
        (global as any).afterEach = Parser.prototype.afterEach.bind(this);

        // reset auto-increment ID for next file
        this.nextTestId = 1;

        this.context.currentNode = root;
        return await this.parseNode(this.context.currentNode);
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

    public async parseNode(node: BaseNode): Promise<any> {
        if (node instanceof TestNode) {
            await this.dispatchEvent(
                new NewTestEvent(
                    this.context.currentFile!.name,
                    node
                )
            );
            return;
        }

        const suiteNode = node as SuiteNode;

        await this.dispatchEvent(
            new NewSuiteEvent(
                this.context.currentFile!.name,
                suiteNode
            )
        );

        // save currentNode, recurse down tree, restore currentNode
        const previousNode = this.context.currentNode;
        this.context.currentNode = node;

        // This runs the callback of a describe("name", callback) block
        const oldStdout = process.stdout.write;
        const oldStderr = process.stderr.write;
        try {
            (process as any).stdout.write = this.notifyStdoutEvent.bind(this);
            (process as any).stderr.write = this.notifyStderrEvent.bind(this);

            await suiteNode.parse();

            process.stdout.write = oldStdout;
            process.stderr.write = oldStderr;
        } catch (err: any) {
            process.stdout.write = oldStdout;
            process.stderr.write = oldStderr;
            logger.error(`Error parsing node: '${node.name}': ${err.stack}`);
            await this.dispatchEvent(
                new ParseErrorEvent(
                    this.context.currentFile!.name,
                    err
                )
            );
            throw err;
        }

        // if any nested describe()s were found, recursively parse those now:
        for (const child of suiteNode.children) {
            await this.parseNode(child);
        }
        this.context.currentNode = previousNode;
    }

};