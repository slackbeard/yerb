import { Config } from '@bchance/yerb';

export default new Config({
    specBaseDir: "./out-tsc/specs",
    include: ["*.spec.js"],
    exclude: ["**/node_modules/**"]
});