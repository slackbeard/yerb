import { Config } from "../../src/lib/model/config";
import { loadConfigFile } from "../../src/lib/config";
import path from 'path';
import assert from 'assert';

export async function testNewConfig() {
    const config = new Config({ include: ["glob here", "another glob"] });
    assert.strictEqual(config.include[0], "glob here");
    assert.strictEqual(config.include.length, 2);
};

export async function testMergeConfig() {

    const config = new Config({ include: ["glob here", "another glob"] });

    await config.merge({ specBaseDir: "blah" });
    assert.strictEqual(config.specBaseDir, "blah");
    assert.strictEqual(config.include[0], "glob here");
    assert.strictEqual(config.include.length, 2);

    await config.merge({ include: ["new pattern"] });
    assert.strictEqual(config.include[0], "new pattern");
    assert.strictEqual(config.include.length, 1);
}

export async function testLoadMissingConfig() {

    const badConfigPath = path.join(__dirname, 'bad-filename.js');

    try {
        await loadConfigFile(badConfigPath);
    } catch (err: any) {
        assert.strictEqual(err.code, 'MODULE_NOT_FOUND');
    }
}

export async function testLoadEmptyConfig() {

    const emptyConfigPath = path.join(__dirname, 'config', 'empty.config.ts');

    try {
        const config = await loadConfigFile(emptyConfigPath);
    } catch (err: any) {
        assert(err.message.startsWith("No Config object imported"));
    }
}

export async function testLoadConfig() {

    const configPath = path.join(__dirname, 'config', 'test.config.ts');

    const config = await loadConfigFile(configPath);

    assert.strictEqual(config.specBaseDir, "blah");
}