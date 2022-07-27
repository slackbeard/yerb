[yerb](../README.md) / [Exports](../modules.md) / [lib/util/logging](../modules/lib_util_logging.md) / ConsoleLogger

# Class: ConsoleLogger

[lib/util/logging](../modules/lib_util_logging.md).ConsoleLogger

## Table of contents

### Constructors

- [constructor](lib_util_logging.ConsoleLogger.md#constructor)

### Properties

- [level](lib_util_logging.ConsoleLogger.md#level)
- [logColors](lib_util_logging.ConsoleLogger.md#logcolors)

### Methods

- [debug](lib_util_logging.ConsoleLogger.md#debug)
- [error](lib_util_logging.ConsoleLogger.md#error)
- [info](lib_util_logging.ConsoleLogger.md#info)
- [log](lib_util_logging.ConsoleLogger.md#log)
- [warn](lib_util_logging.ConsoleLogger.md#warn)
- [write](lib_util_logging.ConsoleLogger.md#write)

## Constructors

### constructor

• **new ConsoleLogger**()

## Properties

### level

• **level**: [`LogLevel`](../enums/lib_util_logging.LogLevel.md) = `LogLevel.ALL`

#### Defined in

lib/util/logging.ts:118

___

### logColors

• **logColors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | [`AnsiColor`](../enums/lib_util_logging.AnsiColor.md) |
| `1` | [`AnsiColor`](../enums/lib_util_logging.AnsiColor.md) |
| `2` | [`AnsiColor`](../enums/lib_util_logging.AnsiColor.md) |
| `3` | [`AnsiColor`](../enums/lib_util_logging.AnsiColor.md) |

#### Defined in

lib/util/logging.ts:119

## Methods

### debug

▸ **debug**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `String` |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:165

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `String` |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:177

___

### info

▸ **info**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `String` |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:169

___

### log

▸ **log**(`msg`, `level?`): `void`

Log output at a given log level

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `msg` | `String` | `undefined` | output string |
| `level` | [`LogLevel`](../enums/lib_util_logging.LogLevel.md) | `LogLevel.INFO` |  |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:159

___

### warn

▸ **warn**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `String` |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:173

___

### write

▸ **write**(`msg`): `void`

Log unformatted output to console

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `String` | output string |

#### Returns

`void`

#### Defined in

lib/util/logging.ts:149
