[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / ManagerResultEvent

# Class: ManagerResultEvent

[lib/model/events](../modules/lib_model_events.md).ManagerResultEvent

This event is emitted by the manager thread when it receives a test result.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`ManagerResultEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.ManagerResultEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.ManagerResultEvent.md#defaultprevented)
- [result](lib_model_events.ManagerResultEvent.md#result)
- [type](lib_model_events.ManagerResultEvent.md#type)

### Methods

- [preventDefault](lib_model_events.ManagerResultEvent.md#preventdefault)

## Constructors

### constructor

• **new ManagerResultEvent**(`result`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`BaseResult`](lib_model_results.BaseResult.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:159

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean` = `false`

#### Inherited from

[Event](lib_model_events.Event.md).[defaultPrevented](lib_model_events.Event.md#defaultprevented)

#### Defined in

lib/model/events.ts:8

___

### result

• **result**: [`BaseResult`](lib_model_results.BaseResult.md)

#### Defined in

lib/model/events.ts:160

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
