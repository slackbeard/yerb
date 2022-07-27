[yerb](../README.md) / [Exports](../modules.md) / [lib/reporter](../modules/lib_reporter.md) / DefaultReporter

# Class: DefaultReporter

[lib/reporter](../modules/lib_reporter.md).DefaultReporter

Pretty-print test results to stdout

## Table of contents

### Constructors

- [constructor](lib_reporter.DefaultReporter.md#constructor)

### Methods

- [report](lib_reporter.DefaultReporter.md#report)
- [reportNode](lib_reporter.DefaultReporter.md#reportnode)

## Constructors

### constructor

• **new DefaultReporter**()

## Methods

### report

▸ **report**(`results`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`ResultsCollection`](lib_model_results.ResultsCollection.md) |

#### Returns

`void`

#### Defined in

lib/reporter.ts:9

___

### reportNode

▸ **reportNode**(`result`, `indent?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `result` | [`BaseResult`](lib_model_results.BaseResult.md) | `undefined` |
| `indent` | `number` | `0` |

#### Returns

`void`

#### Defined in

lib/reporter.ts:20
