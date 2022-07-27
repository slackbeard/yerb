[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / SuiteCompletedEvent

# Class: SuiteCompletedEvent

[lib/model/events](../modules/lib_model_events.md).SuiteCompletedEvent

This event is emitted when a suite completes.

To get the success/failure status, examine `node.state.status` (See [TestStatus](../enums/lib_model_nodes.TestStatus.md)).

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`SuiteCompletedEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.SuiteCompletedEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.SuiteCompletedEvent.md#defaultprevented)
- [filename](lib_model_events.SuiteCompletedEvent.md#filename)
- [node](lib_model_events.SuiteCompletedEvent.md#node)
- [type](lib_model_events.SuiteCompletedEvent.md#type)

### Methods

- [preventDefault](lib_model_events.SuiteCompletedEvent.md#preventdefault)

## Constructors

### constructor

• **new SuiteCompletedEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:146

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

lib/model/events.ts:147

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:148

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
