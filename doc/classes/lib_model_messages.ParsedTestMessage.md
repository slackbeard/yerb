[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / ParsedTestMessage

# Class: ParsedTestMessage

[lib/model/messages](../modules/lib_model_messages.md).ParsedTestMessage

Message from [Parser](lib_parser.Parser.md) sent by worker after a test has been parsed.

ie. after an `it()` block has been found.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`ParsedTestMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.ParsedTestMessage.md#constructor)

### Properties

- [filename](lib_model_messages.ParsedTestMessage.md#filename)
- [msgType](lib_model_messages.ParsedTestMessage.md#msgtype)
- [node](lib_model_messages.ParsedTestMessage.md#node)
- [parentNodeId](lib_model_messages.ParsedTestMessage.md#parentnodeid)
- [MSG\_TYPE](lib_model_messages.ParsedTestMessage.md#msg_type)

## Constructors

### constructor

• **new ParsedTestMessage**(`filename`, `node`, `parentNodeId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `parentNodeId` | `number` |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:73

## Properties

### filename

• **filename**: `string`

#### Defined in

lib/model/messages.ts:74

___

### msgType

• **msgType**: `string` = `""`

#### Inherited from

[BaseMessage](lib_model_messages.BaseMessage.md).[msgType](lib_model_messages.BaseMessage.md#msgtype)

#### Defined in

lib/model/messages.ts:12

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/messages.ts:75

___

### parentNodeId

• **parentNodeId**: `number`

#### Defined in

lib/model/messages.ts:76

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"parsedTest"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:71
