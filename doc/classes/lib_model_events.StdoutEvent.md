[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / StdoutEvent

# Class: StdoutEvent

[lib/model/events](../modules/lib_model_events.md).StdoutEvent

This event is emitted when the worker thread writes to stdout.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`StdoutEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.StdoutEvent.md#constructor)

### Properties

- [data](lib_model_events.StdoutEvent.md#data)
- [defaultPrevented](lib_model_events.StdoutEvent.md#defaultprevented)
- [filename](lib_model_events.StdoutEvent.md#filename)
- [node](lib_model_events.StdoutEvent.md#node)
- [type](lib_model_events.StdoutEvent.md#type)

### Methods

- [preventDefault](lib_model_events.StdoutEvent.md#preventdefault)

## Constructors

### constructor

• **new StdoutEvent**(`filename`, `node`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `data` | `string` |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:35

## Properties

### data

• **data**: `string`

#### Defined in

lib/model/events.ts:38

___

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

lib/model/events.ts:36

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:37

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
