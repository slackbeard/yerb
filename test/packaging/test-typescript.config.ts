import { Config } from 'yerb';

export default new Config({
    include: ["specs/*.spec.ts"],
    exclude: ["**/node_modules/**"]
});