import { Config } from 'yerb';

export default new Config({
    specBaseDir: "./out-tsc/specs",
    include: ["*.spec.js"],
    exclude: ["**/node_modules/**"]
});