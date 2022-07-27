[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / StdoutMessage

# Class: StdoutMessage

[lib/model/messages](../modules/lib_model_messages.md).StdoutMessage

Message from [Parser](lib_parser.Parser.md) or [Runner](lib_runner.Runner.md) whenever data is written to stdout from the test.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`StdoutMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.StdoutMessage.md#constructor)

### Properties

- [data](lib_model_messages.StdoutMessage.md#data)
- [filename](lib_model_messages.StdoutMessage.md#filename)
- [msgType](lib_model_messages.StdoutMessage.md#msgtype)
- [testId](lib_model_messages.StdoutMessage.md#testid)
- [MSG\_TYPE](lib_model_messages.StdoutMessage.md#msg_type)

## Constructors

### constructor

• **new StdoutMessage**(`filename`, `testId`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `testId` | `number` |
| `data` | `string` |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:106

## Properties

### data

• **data**: `string`

#### Defined in

lib/model/messages.ts:109

___

### filename

• **filename**: `string`

#### Defined in

lib/model/messages.ts:107

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

lib/model/messages.ts:108

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"stdout"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:104
