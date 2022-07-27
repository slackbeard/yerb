import { Config } from './config';
import { SuiteNode, BaseNode } from './nodes';

/**
 * Information about the current context.
 * 
 * For example, to examine the currently running test:
 * 
 * ```
 * // hello.spec.ts
 * 
 * import { getTestProcessor } from 'yerb';
 * 
 * const testProcessor = getTestProcessor();
 * 
 * describe("my suite", () => {
 *   
 *   it("my test", () => {
 * 
 *     console.log(`Hello from test "${testProcessor.context.currentNode.name")`);
 * 
 *   });
 * 
 * });
 * ```
 * 
 */
export class Context {

    /**
     * Reference to the config object being used
     */
    public config?: Config;

    /**
     * Reference to the current file (as a SuiteNode).
     * E.g. the current file name would be `currentFile.name` 
     */
    public currentFile?: SuiteNode;

    /**
     * During parse phase, currentNode points at current suite being parsed for tests
     * During run phase, currentNode points at current test being run
     */
    public currentNode: BaseNode = new BaseNode();

    constructor(config?: Config) {
        this.config = config;
    }
};