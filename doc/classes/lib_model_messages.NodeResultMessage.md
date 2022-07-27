[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / NodeResultMessage

# Class: NodeResultMessage

[lib/model/messages](../modules/lib_model_messages.md).NodeResultMessage

Message from [Runner](lib_runner.Runner.md) sent by worker after a test has been run.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`NodeResultMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.NodeResultMessage.md#constructor)

### Properties

- [errors](lib_model_messages.NodeResultMessage.md#errors)
- [filename](lib_model_messages.NodeResultMessage.md#filename)
- [msgType](lib_model_messages.NodeResultMessage.md#msgtype)
- [result](lib_model_messages.NodeResultMessage.md#result)
- [testId](lib_model_messages.NodeResultMessage.md#testid)
- [MSG\_TYPE](lib_model_messages.NodeResultMessage.md#msg_type)

## Constructors

### constructor

• **new NodeResultMessage**(`filename`, `testId`, `result`, `errors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `testId` | `number` |
| `result` | [`TestState`](lib_model_nodes.TestState.md) |
| `errors` | `string`[] |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:89

## Properties

### errors

• **errors**: `string`[]

#### Defined in

lib/model/messages.ts:93

___

### filename

• **filename**: `string`

#### Defined in

lib/model/messages.ts:90

___

### msgType

• **msgType**: `string` = `""`

#### Inherited from

[BaseMessage](lib_model_messages.BaseMessage.md).[msgType](lib_model_messages.BaseMessage.md#msgtype)

#### Defined in

lib/model/messages.ts:12

___

### result

• **result**: [`TestState`](lib_model_nodes.TestState.md)

#### Defined in

lib/model/messages.ts:92

___

### testId

• **testId**: `number`

#### Defined in

lib/model/messages.ts:91

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"nodeResult"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:87
