import { Config } from '../../../src/lib/model/config';

export default new Config({
    workers: 2,
    include: ["*.spec.ts"],
    exclude: ["**/node_modules/**/*"]
});