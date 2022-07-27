[yerb](../README.md) / [Exports](../modules.md) / [lib/runner](../modules/lib_runner.md) / Runner

# Class: Runner

[lib/runner](../modules/lib_runner.md).Runner

The Runner runs tests and reports their results via events.

## Hierarchy

- [`AsyncEventTarget`](lib_model_async_event_target.AsyncEventTarget.md)

  ↳ **`Runner`**

## Table of contents

### Constructors

- [constructor](lib_runner.Runner.md#constructor)

### Properties

- [context](lib_runner.Runner.md#context)
- [listeners](lib_runner.Runner.md#listeners)

### Methods

- [addEventListener](lib_runner.Runner.md#addeventlistener)
- [dispatchEvent](lib_runner.Runner.md#dispatchevent)
- [notifyStderrEvent](lib_runner.Runner.md#notifystderrevent)
- [notifyStdoutEvent](lib_runner.Runner.md#notifystdoutevent)
- [onBeforeSuiteStart](lib_runner.Runner.md#onbeforesuitestart)
- [onBeforeTestStart](lib_runner.Runner.md#onbeforeteststart)
- [onStderr](lib_runner.Runner.md#onstderr)
- [onStdout](lib_runner.Runner.md#onstdout)
- [onSuiteCompleted](lib_runner.Runner.md#onsuitecompleted)
- [onTestCompleted](lib_runner.Runner.md#ontestcompleted)
- [removeEventListener](lib_runner.Runner.md#removeeventlistener)
- [run](lib_runner.Runner.md#run)
- [runNode](lib_runner.Runner.md#runnode)
- [runSuite](lib_runner.Runner.md#runsuite)
- [runTest](lib_runner.Runner.md#runtest)

## Constructors

### constructor

• **new Runner**(`context`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](lib_model_context.Context.md) |
| `init` | `Partial`<[`Runner`](lib_runner.Runner.md)\> |

#### Overrides

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[constructor](lib_model_async_event_target.AsyncEventTarget.md#constructor)

#### Defined in

lib/runner.ts:40

## Properties

### context

• **context**: [`Context`](lib_model_context.Context.md)

#### Defined in

lib/runner.ts:13

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

### notifyStderrEvent

▸ **notifyStderrEvent**(`data`, `encoding`, `fd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `encoding` | `any` |
| `fd` | `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:161

___

### notifyStdoutEvent

▸ **notifyStdoutEvent**(`data`, `encoding`, `fd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `encoding` | `any` |
| `fd` | `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:151

___

### onBeforeSuiteStart

▸ **onBeforeSuiteStart**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`BeforeSuiteStartEvent`](lib_model_events.BeforeSuiteStartEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:15

___

### onBeforeTestStart

▸ **onBeforeTestStart**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`BeforeTestStartEvent`](lib_model_events.BeforeTestStartEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:19

___

### onStderr

▸ **onStderr**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`StderrEvent`](lib_model_events.StderrEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:35

___

### onStdout

▸ **onStdout**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`StdoutEvent`](lib_model_events.StdoutEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:31

___

### onSuiteCompleted

▸ **onSuiteCompleted**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`SuiteCompletedEvent`](lib_model_events.SuiteCompletedEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:27

___

### onTestCompleted

▸ **onTestCompleted**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`TestCompletedEvent`](lib_model_events.TestCompletedEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/runner.ts:23

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

### run

▸ **run**(`root`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`SuiteNode`](lib_model_nodes.SuiteNode.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/runner.ts:46

___

### runNode

▸ **runNode**(`node`, `setups`, `teardowns`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |
| `setups` | `any`[] |
| `teardowns` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/runner.ts:70

___

### runSuite

▸ **runSuite**(`node`, `beforeEachCallbacks`, `afterEachCallbacks`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SuiteNode`](lib_model_nodes.SuiteNode.md) |
| `beforeEachCallbacks` | `any`[] |
| `afterEachCallbacks` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/runner.ts:93

___

### runTest

▸ **runTest**(`node`, `beforeEachCallbacks`, `afterEachCallbacks`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TestNode`](lib_model_nodes.TestNode.md) |
| `beforeEachCallbacks` | `any`[] |
| `afterEachCallbacks` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/runner.ts:171
