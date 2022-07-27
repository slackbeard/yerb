import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["failfast.spec.ts"],
    exclude: ["**/node_modules/**/*"],
    workerInitScript: "worker-init.ts",
});