import { Config } from '../../../src/lib/model/config';

export default new Config({
    include: ["skip.spec.ts"],
    exclude: ["**/node_modules/**/*"]
});