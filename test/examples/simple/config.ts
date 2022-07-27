import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["simple.spec.ts"],
    exclude: ["**/node_modules/**/*"]
});