[yerb](../README.md) / [Exports](../modules.md) / [lib/model/results](../modules/lib_model_results.md) / TestResultNode

# Class: TestResultNode

[lib/model/results](../modules/lib_model_results.md).TestResultNode

## Hierarchy

- [`BaseResult`](lib_model_results.BaseResult.md)

  ↳ **`TestResultNode`**

## Table of contents

### Constructors

- [constructor](lib_model_results.TestResultNode.md#constructor)

### Properties

- [errors](lib_model_results.TestResultNode.md#errors)
- [name](lib_model_results.TestResultNode.md#name)
- [nodeId](lib_model_results.TestResultNode.md#nodeid)
- [state](lib_model_results.TestResultNode.md#state)
- [stderr](lib_model_results.TestResultNode.md#stderr)
- [stdout](lib_model_results.TestResultNode.md#stdout)

## Constructors

### constructor

• **new TestResultNode**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Partial`<[`TestResultNode`](lib_model_results.TestResultNode.md)\> |

#### Overrides

[BaseResult](lib_model_results.BaseResult.md).[constructor](lib_model_results.BaseResult.md#constructor)

#### Defined in

lib/model/results.ts:14

## Properties

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
