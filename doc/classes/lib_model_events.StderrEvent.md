[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / StderrEvent

# Class: StderrEvent

[lib/model/events](../modules/lib_model_events.md).StderrEvent

This event is emitted when the worker thread writes to stderr.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`StderrEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.StderrEvent.md#constructor)

### Properties

- [data](lib_model_events.StderrEvent.md#data)
- [defaultPrevented](lib_model_events.StderrEvent.md#defaultprevented)
- [filename](lib_model_events.StderrEvent.md#filename)
- [node](lib_model_events.StderrEvent.md#node)
- [type](lib_model_events.StderrEvent.md#type)

### Methods

- [preventDefault](lib_model_events.StderrEvent.md#preventdefault)

## Constructors

### constructor

• **new StderrEvent**(`filename`, `node`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `data` | `string` |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:49

## Properties

### data

• **data**: `string`

#### Defined in

lib/model/events.ts:52

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

lib/model/events.ts:50

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:51

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
