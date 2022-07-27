import { BaseNode, TestState } from "./nodes";

export class BaseResult {
    public name = "";
    public nodeId = -1;
    public errors: string[] = [];
    public state = new TestState();
    public stdout = "";
    public stderr = "";
};

export class TestResultNode extends BaseResult {

    constructor(init: Partial<TestResultNode> = {}) {
        super();
        Object.assign(this, init);
    }
};

export class SuiteResultNode extends BaseResult {

    public children: BaseResult[] = [];

    public addChild(node: BaseResult) {
        this.children.push(node);
    }

    constructor(init: Partial<SuiteResultNode> = {}) {
        super();
        Object.assign(this, init);
    }
};

/**
 * Test results of a file. Results are indexed by test ID so we can sync results from workers -> manager.
 */
export class FileResults {
    public rootSuite: SuiteResultNode;
    public testResultsById: BaseResult[];

    constructor(filename: string) {
        this.rootSuite = new SuiteResultNode({ name: filename, nodeId: 0 });
        this.testResultsById = [this.rootSuite];
    }

    addResultNode(node: BaseResult, parentId: number) {
        const parentNode = this.testResultsById[parentId] as SuiteResultNode;
        if (parentNode) {
            parentNode.addChild(node);
            this.testResultsById[node.nodeId] = node;
            return node;
        }
        throw new Error(`No node found for parentId: ${parentId}`);
    }

}

/**
 * Collection of test results for all spec files in this run
 */
export class ResultsCollection {

    /**
     * Map file names to FileResults
     */
    public fileResultMap: { [key: string]: FileResults } = {};

    /**
     * Adds a new empty result set for a given filename
     * 
     * @param filename 
     */
    addSpecFile(filename: string) {

        this.fileResultMap[filename] ||= new FileResults(filename);
    }

    getSpecFileNames() {
        return Object.keys(this.fileResultMap);
    }

    addResultNode(filename: string, node: BaseResult, parentNodeId: number) {
        const fileResults = this.fileResultMap[filename];
        if (fileResults) {
            return fileResults.addResultNode(node, parentNodeId);
        }

        throw new Error(`No file found for filename=${filename}`);

    }

    addSuite(filename: string, node: BaseNode, parentNodeId: number) {
        const state = node.state;

        return this.addResultNode(
            filename,
            new SuiteResultNode(
                {
                    name: node.name,
                    nodeId: node.nodeId,
                    state: state,
                }
            ),
            parentNodeId
        );
    }

    addTest(filename: string, node: BaseNode, parentNodeId: number) {
        const state = node.state;

        return this.addResultNode(
            filename,
            new TestResultNode(
                {
                    name: node.name,
                    nodeId: node.nodeId,
                    state: state,
                }
            ),
            parentNodeId
        );
    }

    getResult(filename: string, testId: number): BaseResult {
        const fileResults = this.fileResultMap[filename];

        if (fileResults) {

            if (testId in fileResults.testResultsById) {

                return fileResults.testResultsById[testId];
            }
        }

        throw new Error(`No test result found for filename=${filename}, testId=${testId}`);

    }

    /**
     * Locate a result by filename & testId, and update it with the results of the given test.
     */
    updateResult(filename: string, testId: number, result: TestState, errors: string[]) {

        const testResults = this.getResult(filename, testId);
        testResults.state = result;
        testResults.errors = errors;
        return testResults;
    }
}