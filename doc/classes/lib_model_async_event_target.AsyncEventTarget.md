[yerb](../README.md) / [Exports](../modules.md) / [lib/model/async-event-target](../modules/lib_model_async_event_target.md) / AsyncEventTarget

# Class: AsyncEventTarget

[lib/model/async-event-target](../modules/lib_model_async_event_target.md).AsyncEventTarget

Event Target that waits for all async handlers to finish when events are dispatched.

## Hierarchy

- **`AsyncEventTarget`**

  ↳ [`Parser`](lib_parser.Parser.md)

  ↳ [`Runner`](lib_runner.Runner.md)

  ↳ [`TestProcessor`](lib_test_processor.TestProcessor.md)

  ↳ [`WorkerManager`](lib_worker_manager.WorkerManager.md)

## Table of contents

### Constructors

- [constructor](lib_model_async_event_target.AsyncEventTarget.md#constructor)

### Properties

- [listeners](lib_model_async_event_target.AsyncEventTarget.md#listeners)

### Methods

- [addEventListener](lib_model_async_event_target.AsyncEventTarget.md#addeventlistener)
- [dispatchEvent](lib_model_async_event_target.AsyncEventTarget.md#dispatchevent)
- [removeEventListener](lib_model_async_event_target.AsyncEventTarget.md#removeeventlistener)

## Constructors

### constructor

• **new AsyncEventTarget**()

## Properties

### listeners

• **listeners**: `Object` = `{}`

Map of event names to array of callbacks

#### Index signature

▪ [key: `string`]: `any`[]

#### Defined in

lib/model/async-event-target.ts:11

## Methods

### addEventListener

▸ **addEventListener**(`eventType`, `listener`): `void`

Add an event listener

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | event type |
| `listener` | `any` | callback function, can be sync or async. |

#### Returns

`void`

#### Defined in

lib/model/async-event-target.ts:19

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `Promise`<`void`\>

Dispatch event and wait for all handlers to finish, even async ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`Event`](lib_model_events.Event.md) | Event object to dispatch |

#### Returns

`Promise`<`void`\>

#### Defined in

lib/model/async-event-target.ts:44

___

### removeEventListener

▸ **removeEventListener**(`eventType`, `listener`): `void`

Remove listener for an event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | event type |
| `listener` | `any` | callback function to remove |

#### Returns

`void`

#### Defined in

lib/model/async-event-target.ts:33
