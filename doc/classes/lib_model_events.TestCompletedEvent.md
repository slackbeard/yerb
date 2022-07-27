[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / TestCompletedEvent

# Class: TestCompletedEvent

[lib/model/events](../modules/lib_model_events.md).TestCompletedEvent

This event is emitted when a test completes.

To get the success/failure status, examine `node.state.status` (See [TestStatus](../enums/lib_model_nodes.TestStatus.md)).

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`TestCompletedEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.TestCompletedEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.TestCompletedEvent.md#defaultprevented)
- [filename](lib_model_events.TestCompletedEvent.md#filename)
- [node](lib_model_events.TestCompletedEvent.md#node)
- [type](lib_model_events.TestCompletedEvent.md#type)

### Methods

- [preventDefault](lib_model_events.TestCompletedEvent.md#preventdefault)

## Constructors

### constructor

• **new TestCompletedEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:131

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean` = `false`

#### Inherited from

[Event](lib_model_events.Event.md).[defaultPrevented](lib_model_events.Event.md#defaultprevented)

#### Defined in

lib/model/events.ts:8

___

### filename

• **filename**: `string`

#### Defined in

lib/model/events.ts:132

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:133

___

### type

• **type**: `string`

#### Inherited from

[Event](lib_model_events.Event.md).[type](lib_model_events.Event.md#type)

#### Defined in

lib/model/events.ts:9

## Methods

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[Event](lib_model_events.Event.md).[preventDefault](lib_model_events.Event.md#preventdefault)

#### Defined in

lib/model/events.ts:12
