[yerb](../README.md) / [Exports](../modules.md) / [lib/model/messages](../modules/lib_model_messages.md) / WorkerReadyMessage

# Class: WorkerReadyMessage

[lib/model/messages](../modules/lib_model_messages.md).WorkerReadyMessage

Message indicating a worker is ready to process tests.
After the manager thread receives this, it should send a [ProcessSpecFileMessage](lib_model_messages.ProcessSpecFileMessage.md).

## Hierarchy

- [`BaseMessage`](lib_model_messages.BaseMessage.md)

  ↳ **`WorkerReadyMessage`**

## Table of contents

### Constructors

- [constructor](lib_model_messages.WorkerReadyMessage.md#constructor)

### Properties

- [msgType](lib_model_messages.WorkerReadyMessage.md#msgtype)
- [MSG\_TYPE](lib_model_messages.WorkerReadyMessage.md#msg_type)

## Constructors

### constructor

• **new WorkerReadyMessage**()

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[constructor](lib_model_messages.BaseMessage.md#constructor)

#### Defined in

lib/model/messages.ts:27

## Properties

### msgType

• **msgType**: `string` = `""`

#### Inherited from

[BaseMessage](lib_model_messages.BaseMessage.md).[msgType](lib_model_messages.BaseMessage.md#msgtype)

#### Defined in

lib/model/messages.ts:12

___

### MSG\_TYPE

▪ `Static` **MSG\_TYPE**: `string` = `"workerReady"`

#### Overrides

[BaseMessage](lib_model_messages.BaseMessage.md).[MSG_TYPE](lib_model_messages.BaseMessage.md#msg_type)

#### Defined in

lib/model/messages.ts:25
