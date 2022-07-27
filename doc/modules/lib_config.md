[yerb](../README.md) / [Exports](../modules.md) / lib/config

# Module: lib/config

## Table of contents

### Functions

- [loadConfigFile](lib_config.md#loadconfigfile)
- [loadLocalConfigFile](lib_config.md#loadlocalconfigfile)

## Functions

### loadConfigFile

▸ **loadConfigFile**(`filename`): `Promise`<[`Config`](../classes/lib_model_config.Config.md)\>

Load a config file by absolute path. Config file can be *.js or *.ts.
The config file must export a default object that extends [Config](../classes/lib_model_config.Config.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | absolute path to config file |

#### Returns

`Promise`<[`Config`](../classes/lib_model_config.Config.md)\>

Config object

#### Defined in

lib/config.ts:13

___

### loadLocalConfigFile

▸ **loadLocalConfigFile**(`filename`): `Promise`<[`Config`](../classes/lib_model_config.Config.md)\>

Load a config file relative to the current working directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | relative path to config file |

#### Returns

`Promise`<[`Config`](../classes/lib_model_config.Config.md)\>

Config object

#### Defined in

lib/config.ts:33
