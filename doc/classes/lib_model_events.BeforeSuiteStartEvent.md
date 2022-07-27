[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / BeforeSuiteStartEvent

# Class: BeforeSuiteStartEvent

[lib/model/events](../modules/lib_model_events.md).BeforeSuiteStartEvent

This event is emitted before each suite is run.

## Hierarchy

- [`Event`](lib_model_events.Event.md)

  ↳ **`BeforeSuiteStartEvent`**

## Table of contents

### Constructors

- [constructor](lib_model_events.BeforeSuiteStartEvent.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.BeforeSuiteStartEvent.md#defaultprevented)
- [filename](lib_model_events.BeforeSuiteStartEvent.md#filename)
- [node](lib_model_events.BeforeSuiteStartEvent.md#node)
- [type](lib_model_events.BeforeSuiteStartEvent.md#type)

### Methods

- [preventDefault](lib_model_events.BeforeSuiteStartEvent.md#preventdefault)

## Constructors

### constructor

• **new BeforeSuiteStartEvent**(`filename`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Overrides

[Event](lib_model_events.Event.md).[constructor](lib_model_events.Event.md#constructor)

#### Defined in

lib/model/events.ts:103

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

lib/model/events.ts:104

___

### node

• **node**: [`BaseNode`](lib_model_nodes.BaseNode.md)

#### Defined in

lib/model/events.ts:105

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
