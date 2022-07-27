/**
 * Config settings.
 * 
 * Your config file should be a .ts or .js file which exports a default Config object.
 * 
 * Example:
 *
 * ```
 * // hello.config.ts
 * 
 * import { Config } from 'yerb';
 * 
 * export default new Config({
 *   include: ["tests/*.spec.ts"] 
 * });
 * ```
 */
export class Config {
    /**
     * Base directory to search for spec files.
     * If a config file is specified, this defaults to the directory of the config file.
     * If no config file is specified, this defaults to the cwd where yerb was run from.
     */
    public specBaseDir?: string = undefined;

    /**
     * Array of spec file patterns to include, e.g. ["./test/*.spec.ts"]
     * Uses minimatch syntax.
     */
    public include: string[] = [];

    /**
     * Array of spec file patterns to exclude, e.g. ["./node_modules/**"]
     * Uses minimatch syntax.
     */
    public exclude: string[] = [];

    /**
     * If inheritSetupAndTeardown is true, then every "beforeEach" and "afterEach" callback 
     * is inherited by all tests in nested suites.
     * 
     * e.g.
     * 
     * ```
     * describe("", () => {
     *   beforeEach(() => {
     *   })
     * 
     *   describe("", () => {
     *      it("", () => {
     *          // beforeEach defined above applies to this test
     *      })
     *   })
     * })
     * ```
     * 
     * If this setting is false, then "beforeEach" and "afterEach" only apply to tests at the current suite level.
     */
    public inheritSetupAndTeardown: boolean = true;

    /**
     * A script (js or ts) to load in the manager thread before any spec files are loaded.
     * This is where you can set handlers for manager-level events.
     * To get a reference to the manager in this init script, use {@link !lib/worker-manager.getWorkerManager}.
     */
    public managerInitScript: string = "";

    /**
     * A script (js or ts) to load in the worker thread before any spec files are loaded.
     * This is where you can set handlers for test and suite events.
     * To get a reference to the test processor in this init script, use {@link !lib/test-processor.getTestProcessor}.
     */
    public workerInitScript: string = "";

    /**
     * Number of parallel workers to run.
     */
    public workers: number = 1;

    /**
     * tsnode_enabled will be set to true if yerb was invoked with `ts-node`, e.g. during development.
     * This is used internally to determine if *.ts files should be loaded directly, or their compiled *.js files.
     */
    public tsnode_enabled: boolean = false;

    /**
     * Create a config from a partial object.
     * E.g.
     * ```
     * export default new Config({
     *  include: ["tests/*.spec.ts"],
     * }) 
     * ```
     * @param init partial config
     */
    constructor(init: Partial<Config> = {}) {
        this.merge(init);
    }

    /**
     * Merge another config into this one, overwriting any matching keys with the given config
     * 
     * @param source config to merge into this  
     * @returns the combined config
     */
    merge(source: Partial<Config>): Config {
        return Object.assign(this, source);
    }
}
