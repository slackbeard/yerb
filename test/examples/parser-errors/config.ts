import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["*.spec.ts"],
    exclude: ["**/node_modules/**/*"],
    workerInitScript: "worker-init.ts",
});