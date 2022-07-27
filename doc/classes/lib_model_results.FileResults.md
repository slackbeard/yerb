[yerb](../README.md) / [Exports](../modules.md) / [lib/model/results](../modules/lib_model_results.md) / FileResults

# Class: FileResults

[lib/model/results](../modules/lib_model_results.md).FileResults

Test results of a file. Results are indexed by test ID so we can sync results from workers -> manager.

## Table of contents

### Constructors

- [constructor](lib_model_results.FileResults.md#constructor)

### Properties

- [rootSuite](lib_model_results.FileResults.md#rootsuite)
- [testResultsById](lib_model_results.FileResults.md#testresultsbyid)

### Methods

- [addResultNode](lib_model_results.FileResults.md#addresultnode)

## Constructors

### constructor

• **new FileResults**(`filename`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Defined in

lib/model/results.ts:41

## Properties

### rootSuite

• **rootSuite**: [`SuiteResultNode`](lib_model_results.SuiteResultNode.md)

#### Defined in

lib/model/results.ts:38

___

### testResultsById

• **testResultsById**: [`BaseResult`](lib_model_results.BaseResult.md)[]

#### Defined in

lib/model/results.ts:39

## Methods

### addResultNode

▸ **addResultNode**(`node`, `parentId`): [`BaseResult`](lib_model_results.BaseResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`BaseResult`](lib_model_results.BaseResult.md) |
| `parentId` | `number` |

#### Returns

[`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/results.ts:46
