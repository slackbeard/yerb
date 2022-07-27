// This trick is based on an article by Caleb Pitan: https://www.calebpitan.com/blog/the-magic-of-using-typescript-at-runtime
const { workerData } = require('worker_threads');
const { register } = require('ts-node');

// register ts-node to load typescript on-the-fly
register({ transpileOnly: true });

// load script - js and ts both supported at this point
try {
    require(workerData.scriptPath);
} catch (err) {
    console.warn(`Failed to import worker script: ${err}`);
    throw err;
}
