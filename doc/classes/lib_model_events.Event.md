[yerb](../README.md) / [Exports](../modules.md) / [lib/model/events](../modules/lib_model_events.md) / Event

# Class: Event

[lib/model/events](../modules/lib_model_events.md).Event

Minimal shim for older node support

## Hierarchy

- **`Event`**

  ↳ [`StdoutEvent`](lib_model_events.StdoutEvent.md)

  ↳ [`StderrEvent`](lib_model_events.StderrEvent.md)

  ↳ [`NewSuiteEvent`](lib_model_events.NewSuiteEvent.md)

  ↳ [`NewTestEvent`](lib_model_events.NewTestEvent.md)

  ↳ [`ParseErrorEvent`](lib_model_events.ParseErrorEvent.md)

  ↳ [`BeforeSuiteStartEvent`](lib_model_events.BeforeSuiteStartEvent.md)

  ↳ [`BeforeTestStartEvent`](lib_model_events.BeforeTestStartEvent.md)

  ↳ [`TestCompletedEvent`](lib_model_events.TestCompletedEvent.md)

  ↳ [`SuiteCompletedEvent`](lib_model_events.SuiteCompletedEvent.md)

  ↳ [`ManagerResultEvent`](lib_model_events.ManagerResultEvent.md)

## Table of contents

### Constructors

- [constructor](lib_model_events.Event.md#constructor)

### Properties

- [defaultPrevented](lib_model_events.Event.md#defaultprevented)
- [type](lib_model_events.Event.md#type)

### Methods

- [preventDefault](lib_model_events.Event.md#preventdefault)

## Constructors

### constructor

• **new Event**(`type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Defined in

lib/model/events.ts:9

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean` = `false`

#### Defined in

lib/model/events.ts:8

___

### type

• **type**: `string`

#### Defined in

lib/model/events.ts:9

## Methods

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

lib/model/events.ts:12
