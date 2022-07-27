import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["nested.spec.ts"],
    exclude: ["**/node_modules/**/*"]
});