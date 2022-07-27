[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / NewTestEvent

# Class: NewTestEvent

[lib/model/events](../modules/lib_model_events.md).NewTestEvent

This event is emitted when the parser finds a new test (an `it()` block).

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`NewTestEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.NewTestEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.NewTestEvent.md#defaultprevented)
- [filename](lib_model_events.NewTestEvent.md#filename)
- [node](lib_model_events.NewTestEvent.md#node)
- [type](lib_model_events.NewTestEvent.md#type)

### Methods

- [preventDefault](lib_model_events.NewTestEvent.md#preventdefault)

## Constructors

### constructor

• **new NewTestEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`TestNode`](lib_model_nodes.TestNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:76

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

lib/model/events.ts:77

___

### node

• **node**: [`TestNode`](lib_model_nodes.TestNode.md)

#### Defined in

lib/model/events.ts:78

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
