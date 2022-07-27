[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / ParseErrorEvent

# Class: ParseErrorEvent

[lib/model/events](../modules/lib_model_events.md).ParseErrorEvent

This event is emitted when the parser encounters an error,
e.g. an error thrown from inside the describe() block or from global scope.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`ParseErrorEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.ParseErrorEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.ParseErrorEvent.md#defaultprevented)
- [error](lib_model_events.ParseErrorEvent.md#error)
- [filename](lib_model_events.ParseErrorEvent.md#filename)
- [type](lib_model_events.ParseErrorEvent.md#type)

### Methods

- [preventDefault](lib_model_events.ParseErrorEvent.md#preventdefault)

## Constructors

### constructor

• **new ParseErrorEvent**(`filename`, `error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `error` | `Error` |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:90

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean` = `false`

#### Inherited from

[Event](lib_model_events.Event.md).[defaultPrevented](lib_model_events.Event.md#defaultprevented)

#### Defined in

lib/model/events.ts:8

___

### error

• **error**: `Error`

#### Defined in

lib/model/events.ts:92

___

### filename

• **filename**: `string`

#### Defined in

lib/model/events.ts:91

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
