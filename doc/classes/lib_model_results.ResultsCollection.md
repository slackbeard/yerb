[yerb](../README.md) / [Exports](../modules.md) / [lib/model/results](../modules/lib_model_results.md) / ResultsCollection

# Class: ResultsCollection

[lib/model/results](../modules/lib_model_results.md).ResultsCollection

Collection of test results for all spec files in this run

## Table of contents

### Constructors

- [constructor](lib_model_results.ResultsCollection.md#constructor)

### Properties

- [fileResultMap](lib_model_results.ResultsCollection.md#fileresultmap)

### Methods

- [addResultNode](lib_model_results.ResultsCollection.md#addresultnode)
- [addSpecFile](lib_model_results.ResultsCollection.md#addspecfile)
- [addSuite](lib_model_results.ResultsCollection.md#addsuite)
- [addTest](lib_model_results.ResultsCollection.md#addtest)
- [getResult](lib_model_results.ResultsCollection.md#getresult)
- [getSpecFileNames](lib_model_results.ResultsCollection.md#getspecfilenames)
- [updateResult](lib_model_results.ResultsCollection.md#updateresult)

## Constructors

### constructor

• **new ResultsCollection**()

## Properties

### fileResultMap

• **fileResultMap**: `Object` = `{}`

Map file names to FileResults

#### Index signature

▪ [key: `string`]: [`FileResults`](lib_model_results.FileResults.md)

#### Defined in

lib/model/results.ts:66

## Methods

### addResultNode

▸ **addResultNode**(`filename`, `node`, `parentNodeId`): [`BaseResult`](lib_model_results.BaseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseResult`](lib_model_results.BaseResult.md) |
| `parentNodeId` | `number` |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:82

___

### addSpecFile

▸ **addSpecFile**(`filename`): `void`

Adds a new empty result set for a given filename

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`void`

#### Defined in

lib/model/results.ts:73

___

### addSuite

▸ **addSuite**(`filename`, `node`, `parentNodeId`): [`BaseResult`](lib_model_results.BaseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `parentNodeId` | `number` |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:92

___

### addTest

▸ **addTest**(`filename`, `node`, `parentNodeId`): [`BaseResult`](lib_model_results.BaseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `parentNodeId` | `number` |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:108

___

### getResult

▸ **getResult**(`filename`, `testId`): [`BaseResult`](lib_model_results.BaseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `testId` | `number` |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:124

___

### getSpecFileNames

▸ **getSpecFileNames**(): `string`[]

#### Returns

`string`[]

#### Defined in

lib/model/results.ts:78

___

### updateResult

▸ **updateResult**(`filename`, `testId`, `result`, `errors`): [`BaseResult`](lib_model_results.BaseResult.md)

Locate a result by filename & testId, and update it with the results of the given test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `testId` | `number` |
| `result` | [`TestState`](lib_model_nodes.TestState.md) |
| `errors` | `string`[] |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:142
