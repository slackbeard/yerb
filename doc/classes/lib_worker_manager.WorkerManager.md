[yerb](../README.md) / [Exports](../modules.md) / [lib/worker-manager](../modules/lib_worker_manager.md) / WorkerManager

# Class: WorkerManager

[lib/worker-manager](../modules/lib_worker_manager.md).WorkerManager

WorkerManager class dispatches and manages worker threads to process tests.

## Hierarchy

- [`AsyncEventTarget`](lib_model_async_event_target.AsyncEventTarget.md)

  ↳ **`WorkerManager`**

## Table of contents

### Constructors

- [constructor](lib_worker_manager.WorkerManager.md#constructor)

### Properties

- [config](lib_worker_manager.WorkerManager.md#config)
- [listeners](lib_worker_manager.WorkerManager.md#listeners)
- [results](lib_worker_manager.WorkerManager.md#results)
- [specFiles](lib_worker_manager.WorkerManager.md#specfiles)
- [workerPromises](lib_worker_manager.WorkerManager.md#workerpromises)

### Methods

- [addEventListener](lib_worker_manager.WorkerManager.md#addeventlistener)
- [addWorker](lib_worker_manager.WorkerManager.md#addworker)
- [allWorkersExited](lib_worker_manager.WorkerManager.md#allworkersexited)
- [dispatchEvent](lib_worker_manager.WorkerManager.md#dispatchevent)
- [loadInitScript](lib_worker_manager.WorkerManager.md#loadinitscript)
- [onResult](lib_worker_manager.WorkerManager.md#onresult)
- [processSpecFiles](lib_worker_manager.WorkerManager.md#processspecfiles)
- [removeEventListener](lib_worker_manager.WorkerManager.md#removeeventlistener)
- [shardFunction](lib_worker_manager.WorkerManager.md#shardfunction)
- [sortFunction](lib_worker_manager.WorkerManager.md#sortfunction)

## Constructors

### constructor

• **new WorkerManager**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](lib_model_config.Config.md) |

#### Overrides

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[constructor](lib_model_async_event_target.AsyncEventTarget.md#constructor)

#### Defined in

lib/worker-manager.ts:98

## Properties

### config

• **config**: [`Config`](lib_model_config.Config.md)

#### Defined in

lib/worker-manager.ts:39

___

### listeners

• **listeners**: `Object` = `{}`

Map of event names to array of callbacks

#### Index signature

▪ [key: `string`]: `any`[]

#### Inherited from

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[listeners](lib_model_async_event_target.AsyncEventTarget.md#listeners)

#### Defined in

lib/model/async-event-target.ts:11

___

### results

• **results**: [`ResultsCollection`](lib_model_results.ResultsCollection.md)

#### Defined in

lib/worker-manager.ts:45

___

### specFiles

• **specFiles**: `string`[] = `[]`

#### Defined in

lib/worker-manager.ts:43

___

### workerPromises

• **workerPromises**: `Promise`<`any`\>[] = `[]`

#### Defined in

lib/worker-manager.ts:41

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

#### Inherited from

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[addEventListener](lib_model_async_event_target.AsyncEventTarget.md#addeventlistener)

#### Defined in

lib/model/async-event-target.ts:19

___

### addWorker

▸ **addWorker**(`workerPath`, `specFiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workerPath` | `string` |
| `specFiles` | `string`[] |

#### Returns

`void`

#### Defined in

lib/worker-manager.ts:134

___

### allWorkersExited

▸ **allWorkersExited**(): `Promise`<`any`\>

Wait for all worker threads to finish.

#### Returns

`Promise`<`any`\>

#### Defined in

lib/worker-manager.ts:226

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

#### Inherited from

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[dispatchEvent](lib_model_async_event_target.AsyncEventTarget.md#dispatchevent)

#### Defined in

lib/model/async-event-target.ts:44

___

### loadInitScript

▸ **loadInitScript**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

lib/worker-manager.ts:111

___

### onResult

▸ **onResult**(`callback`): `void`

Add handler for test result event.
This event is triggered when a worker thread reports test results to the manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`ManagerResultEvent`](lib_model_events.ManagerResultEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/worker-manager.ts:107

___

### processSpecFiles

▸ **processSpecFiles**(`specFiles`): `Promise`<`void`\>

Dispatch worker threads to process spec files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `specFiles` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

lib/worker-manager.ts:244

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

#### Inherited from

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[removeEventListener](lib_model_async_event_target.AsyncEventTarget.md#removeeventlistener)

#### Defined in

lib/model/async-event-target.ts:33

___

### shardFunction

▸ **shardFunction**(`sortedFiles`): `Promise`<`string`[][]\>

Custom function to shard (distribute) spec files among workers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortedFiles` | `string`[] | array of spec files after processed by [sortFunction](lib_worker_manager.WorkerManager.md#sortfunction) |

#### Returns

`Promise`<`string`[][]\>

array of spec file arrays. One spec file array per worker.

#### Defined in

lib/worker-manager.ts:76

___

### sortFunction

▸ **sortFunction**(`fileNames`): `Promise`<`string`[]\>

Custom function to sort spec files.
By default, spec files are sorted by file size and distributed evenly among workers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileNames` | `string`[] | array of spec file names |

#### Returns

`Promise`<`string`[]\>

array of sorted spec file names

#### Defined in

lib/worker-manager.ts:54
