[yerb](../README.md) / [Exports](../modules.md) / [lib/model/results](../modules/lib_model_results.md) / SuiteResultNode

# Class: SuiteResultNode

[lib/model/results](../modules/lib_model_results.md).SuiteResultNode

## Hierarchy

- [`BaseResult`](lib_model_results.BaseResult.md)

  ↳ **`SuiteResultNode`**

## Table of contents

### Constructors

- [constructor](lib_model_results.SuiteResultNode.md#constructor)

### Properties

- [children](lib_model_results.SuiteResultNode.md#children)
- [errors](lib_model_results.SuiteResultNode.md#errors)
- [name](lib_model_results.SuiteResultNode.md#name)
- [nodeId](lib_model_results.SuiteResultNode.md#nodeid)
- [state](lib_model_results.SuiteResultNode.md#state)
- [stderr](lib_model_results.SuiteResultNode.md#stderr)
- [stdout](lib_model_results.SuiteResultNode.md#stdout)

### Methods

- [addChild](lib_model_results.SuiteResultNode.md#addchild)

## Constructors

### constructor

• **new SuiteResultNode**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Partial`<[`SuiteResultNode`](lib_model_results.SuiteResultNode.md)\> |

#### Overrides

[BaseResult](lib_model_results.BaseResult.md).[constructor](lib_model_results.BaseResult.md#constructor)

#### Defined in

lib/model/results.ts:28

## Properties

### children

• **children**: [`BaseResult`](lib_model_results.BaseResult.md)[] = `[]`

#### Defined in

lib/model/results.ts:22

___

### errors

• **errors**: `string`[] = `[]`

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[errors](lib_model_results.BaseResult.md#errors)

#### Defined in

lib/model/results.ts:6

___

### name

• **name**: `string` = `""`

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[name](lib_model_results.BaseResult.md#name)

#### Defined in

lib/model/results.ts:4

___

### nodeId

• **nodeId**: `number` = `-1`

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[nodeId](lib_model_results.BaseResult.md#nodeid)

#### Defined in

lib/model/results.ts:5

___

### state

• **state**: [`TestState`](lib_model_nodes.TestState.md)

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[state](lib_model_results.BaseResult.md#state)

#### Defined in

lib/model/results.ts:7

___

### stderr

• **stderr**: `string` = `""`

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[stderr](lib_model_results.BaseResult.md#stderr)

#### Defined in

lib/model/results.ts:9

___

### stdout

• **stdout**: `string` = `""`

#### Inherited from

[BaseResult](lib_model_results.BaseResult.md).[stdout](lib_model_results.BaseResult.md#stdout)

#### Defined in

lib/model/results.ts:8

## Methods

### addChild

▸ **addChild**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`BaseResult`](lib_model_results.BaseResult.md) |

#### Returns

`void`

#### Defined in

lib/model/results.ts:24
