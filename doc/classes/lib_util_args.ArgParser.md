[yerb](../README.md) / [Exports](../modules.md) / [lib/util/args](../modules/lib_util_args.md) / ArgParser

# Class: ArgParser

[lib/util/args](../modules/lib_util_args.md).ArgParser

## Table of contents

### Constructors

- [constructor](lib_util_args.ArgParser.md#constructor)

### Properties

- [commandName](lib_util_args.ArgParser.md#commandname)
- [optionNameMap](lib_util_args.ArgParser.md#optionnamemap)
- [optionShortNameMap](lib_util_args.ArgParser.md#optionshortnamemap)
- [positionalArgs](lib_util_args.ArgParser.md#positionalargs)
- [supportedOptions](lib_util_args.ArgParser.md#supportedoptions)
- [usageHeader](lib_util_args.ArgParser.md#usageheader)

### Methods

- [help](lib_util_args.ArgParser.md#help)
- [parse](lib_util_args.ArgParser.md#parse)

## Constructors

### constructor

• **new ArgParser**(`supportedOptions`, `usageHeader?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportedOptions` | ([`CmdPositionalArg`](lib_util_args.CmdPositionalArg.md) \| [`CmdOption`](lib_util_args.CmdOption.md))[] |
| `usageHeader?` | `String` |

#### Defined in

lib/util/args.ts:58

## Properties

### commandName

• **commandName**: `string` = `"<command>"`

#### Defined in

lib/util/args.ts:54

___

### optionNameMap

• **optionNameMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`CmdOption`](lib_util_args.CmdOption.md)

#### Defined in

lib/util/args.ts:56

___

### optionShortNameMap

• **optionShortNameMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`CmdOption`](lib_util_args.CmdOption.md)

#### Defined in

lib/util/args.ts:57

___

### positionalArgs

• **positionalArgs**: [`CmdPositionalArg`](lib_util_args.CmdPositionalArg.md)[] = `[]`

#### Defined in

lib/util/args.ts:55

___

### supportedOptions

• **supportedOptions**: ([`CmdPositionalArg`](lib_util_args.CmdPositionalArg.md) \| [`CmdOption`](lib_util_args.CmdOption.md))[]

#### Defined in

lib/util/args.ts:59

___

### usageHeader

• `Optional` **usageHeader**: `String`

#### Defined in

lib/util/args.ts:60

## Methods

### help

▸ **help**(): `void`

#### Returns

`void`

#### Defined in

lib/util/args.ts:80

___

### parse

▸ **parse**(`argv`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |

#### Returns

`any`

#### Defined in

lib/util/args.ts:119
