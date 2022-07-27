[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / StderrMessage

# Class: StderrMessage

[lib/model/messages](../modules/lib_model_messages.md).StderrMessage

Message from [Parser](lib_parser.Parser.md) or [Runner](lib_runner.Runner.md) whenever data is written to stderr from the test.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`StderrMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.StderrMessage.md#constructor)

### Properties

- [data](lib_model_messages.StderrMessage.md#data)
- [filename](lib_model_messages.StderrMessage.md#filename)
- [msgType](lib_model_messages.StderrMessage.md#msgtype)
- [testId](lib_model_messages.StderrMessage.md#testid)
- [MSG\_TYPE](lib_model_messages.StderrMessage.md#msg_type)

## Constructors

### constructor

• **new StderrMessage**(`filename`, `testId`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `testId` | `number` |
| `data` | `string` |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:122

## Properties

### data

• **data**: `string`

#### Defined in

lib/model/messages.ts:125

___

### filename

• **filename**: `string`

#### Defined in

lib/model/messages.ts:123

___

### msgType

• **msgType**: `string` = `""`

#### Inherited from

[BaseMessage](lib_model_messages.BaseMessage.md).[msgType](lib_model_messages.BaseMessage.md#msgtype)

#### Defined in

lib/model/messages.ts:12

___

### testId

• **testId**: `number`

#### Defined in

lib/model/messages.ts:124

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"stderr"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:120
