import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["simple.spec.ts"],
    exclude: ["**/node_modules/**/*"],
    managerInitScript: "manager-init.ts",
    workerInitScript: "worker-init.ts",
});