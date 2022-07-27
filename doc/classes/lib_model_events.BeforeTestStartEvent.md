[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / BeforeTestStartEvent

# Class: BeforeTestStartEvent

[lib/model/events](../modules/lib_model_events.md).BeforeTestStartEvent

This event is emitted before each test is run.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`BeforeTestStartEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.BeforeTestStartEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.BeforeTestStartEvent.md#defaultprevented)
- [filename](lib_model_events.BeforeTestStartEvent.md#filename)
- [node](lib_model_events.BeforeTestStartEvent.md#node)
- [type](lib_model_events.BeforeTestStartEvent.md#type)

### Methods

- [preventDefault](lib_model_events.BeforeTestStartEvent.md#preventdefault)

## Constructors

### constructor

• **new BeforeTestStartEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:116

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

lib/model/events.ts:117

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:118

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
