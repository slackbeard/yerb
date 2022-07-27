[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / ProcessSpecFileMessage

# Class: ProcessSpecFileMessage

[lib/model/messages](../modules/lib_model_messages.md).ProcessSpecFileMessage

Message from manager to pass a list of spec files for the worker to process.

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`ProcessSpecFileMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.ProcessSpecFileMessage.md#constructor)

### Properties

- [msgType](lib_model_messages.ProcessSpecFileMessage.md#msgtype)
- [specFileNames](lib_model_messages.ProcessSpecFileMessage.md#specfilenames)
- [MSG\_TYPE](lib_model_messages.ProcessSpecFileMessage.md#msg_type)

## Constructors

### constructor

• **new ProcessSpecFileMessage**(`specFileNames`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `specFileNames` | `string`[] |

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:39

## Properties

### msgType

• **msgType**: `string` = `""`

#### Inherited from

[BaseMessage](lib_model_messages.BaseMessage.md).[msgType](lib_model_messages.BaseMessage.md#msgtype)

#### Defined in

lib/model/messages.ts:12

___

### specFileNames

• **specFileNames**: `string`[]

#### Defined in

lib/model/messages.ts:40

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"processSpecFile"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:37
