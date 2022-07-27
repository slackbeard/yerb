import { Config } from '@bchance/yerb';

export default new Config({
    include: ["specs/*.spec.ts"],
    exclude: ["**/node_modules/**"]
});