[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / ParsedSuiteMessage

# Class: ParsedSuiteMessage

[lib/model/messages](../modules/lib_model_messages.md).ParsedSuiteMessage

Message from [Parser](lib_parser.Parser.md) sent by worker after a suite has been parsed.

ie. after a `describe()` block has been found.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`ParsedSuiteMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.ParsedSuiteMessage.md#constructor)

### Properties

- [filename](lib_model_messages.ParsedSuiteMessage.md#filename)
- [msgType](lib_model_messages.ParsedSuiteMessage.md#msgtype)
- [node](lib_model_messages.ParsedSuiteMessage.md#node)
- [parentNodeId](lib_model_messages.ParsedSuiteMessage.md#parentnodeid)
- [MSG\_TYPE](lib_model_messages.ParsedSuiteMessage.md#msg_type)

## Constructors

### constructor

• **new ParsedSuiteMessage**(`filename`, `node`, `parentNodeId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `parentNodeId` | `number` |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:55

## Properties

### filename

• **filename**: `string`

#### Defined in

lib/model/messages.ts:56

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

lib/model/messages.ts:57

___

### parentNodeId

• **parentNodeId**: `number`

#### Defined in

lib/model/messages.ts:58

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"parsedSuite"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:53
