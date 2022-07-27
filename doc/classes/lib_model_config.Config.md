[yerb](../README.md) / [Exports](../modules.md) / [lib/model/config](../modules/lib_model_config.md) / Config

# Class: Config

[lib/model/config](../modules/lib_model_config.md).Config

Config settings.

Your config file should be a .ts or .js file which exports a default Config object.

Example:

```
// hello.config.ts

import { Config } from 'yerb';

export default new Config({
  include: ["tests/*.spec.ts"] 
});
```

## Table of contents

### Constructors

- [constructor](lib_model_config.Config.md#constructor)

### Properties

- [exclude](lib_model_config.Config.md#exclude)
- [include](lib_model_config.Config.md#include)
- [inheritSetupAndTeardown](lib_model_config.Config.md#inheritsetupandteardown)
- [managerInitScript](lib_model_config.Config.md#managerinitscript)
- [specBaseDir](lib_model_config.Config.md#specbasedir)
- [tsnode\_enabled](lib_model_config.Config.md#tsnode_enabled)
- [workerInitScript](lib_model_config.Config.md#workerinitscript)
- [workers](lib_model_config.Config.md#workers)

### Methods

- [merge](lib_model_config.Config.md#merge)

## Constructors

### constructor

• **new Config**(`init?`)

Create a config from a partial object.
E.g.
```
export default new Config({
 include: ["tests/*.spec.ts"],
}) 
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `init` | `Partial`<[`Config`](lib_model_config.Config.md)\> | partial config |

#### Defined in

lib/model/config.ts:96

## Properties

### exclude

• **exclude**: `string`[] = `[]`

Array of spec file patterns to exclude, e.g. ["./node_modules/**"]
Uses minimatch syntax.

#### Defined in

lib/model/config.ts:36

___

### include

• **include**: `string`[] = `[]`

Array of spec file patterns to include, e.g. ["./test/*.spec.ts"]
Uses minimatch syntax.

#### Defined in

lib/model/config.ts:30

___

### inheritSetupAndTeardown

• **inheritSetupAndTeardown**: `boolean` = `true`

If inheritSetupAndTeardown is true, then every "beforeEach" and "afterEach" callback 
is inherited by all tests in nested suites.

e.g.

```
describe("", () => {
  beforeEach(() => {
  })

  describe("", () => {
     it("", () => {
         // beforeEach defined above applies to this test
     })
  })
})
```

If this setting is false, then "beforeEach" and "afterEach" only apply to tests at the current suite level.

#### Defined in

lib/model/config.ts:59

___

### managerInitScript

• **managerInitScript**: `string` = `""`

A script (js or ts) to load in the manager thread before any spec files are loaded.
This is where you can set handlers for manager-level events.
To get a reference to the manager in this init script, use [getWorkerManager](../modules/lib_worker_manager.md#getworkermanager).

#### Defined in

lib/model/config.ts:66

___

### specBaseDir

• `Optional` **specBaseDir**: `string` = `undefined`

Base directory to search for spec files.
If a config file is specified, this defaults to the directory of the config file.
If no config file is specified, this defaults to the cwd where yerb was run from.

#### Defined in

lib/model/config.ts:24

___

### tsnode\_enabled

• **tsnode\_enabled**: `boolean` = `false`

tsnode_enabled will be set to true if yerb was invoked with `ts-node`, e.g. during development.
This is used internally to determine if *.ts files should be loaded directly, or their compiled *.js files.

#### Defined in

lib/model/config.ts:84

___

### workerInitScript

• **workerInitScript**: `string` = `""`

A script (js or ts) to load in the worker thread before any spec files are loaded.
This is where you can set handlers for test and suite events.
To get a reference to the test processor in this init script, use [getTestProcessor](../modules/lib_test_processor.md#gettestprocessor).

#### Defined in

lib/model/config.ts:73

___

### workers

• **workers**: `number` = `1`

Number of parallel workers to run.

#### Defined in

lib/model/config.ts:78

## Methods

### merge

▸ **merge**(`source`): [`Config`](lib_model_config.Config.md)

Merge another config into this one, overwriting any matching keys with the given config

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Partial`<[`Config`](lib_model_config.Config.md)\> | config to merge into this |

#### Returns

[`Config`](lib_model_config.Config.md)

the combined config

#### Defined in

lib/model/config.ts:106
