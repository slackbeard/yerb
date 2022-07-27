[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / NewSuiteEvent

# Class: NewSuiteEvent

[lib/model/events](../modules/lib_model_events.md).NewSuiteEvent

This event is emitted when the parser finds a new suite (a `describe()` block).

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`NewSuiteEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.NewSuiteEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.NewSuiteEvent.md#defaultprevented)
- [filename](lib_model_events.NewSuiteEvent.md#filename)
- [node](lib_model_events.NewSuiteEvent.md#node)
- [type](lib_model_events.NewSuiteEvent.md#type)

### Methods

- [preventDefault](lib_model_events.NewSuiteEvent.md#preventdefault)

## Constructors

### constructor

• **new NewSuiteEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`SuiteNode`](lib_model_nodes.SuiteNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:63

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

lib/model/events.ts:64

___

### node

• **node**: [`SuiteNode`](lib_model_nodes.SuiteNode.md)

#### Defined in

lib/model/events.ts:65

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
