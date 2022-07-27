[yerb](../README.md) / [Exports](../modules.md) / [lib/parser](../modules/lib_parser.md) / Parser

# Class: Parser

[lib/parser](../modules/lib_parser.md).Parser

The Parser gathers the suites and tests to be run from a spec file.

Suites are represented as `describe()` blocks in the spec file.

Once all the suites are found at the global scope, the parser recursively runs the suites to find nested suites and tests.

The Parser does not actually run tests, that task is performed by the [Runner](lib_runner.Runner.md) class.

## Hierarchy

- [`AsyncEventTarget`](lib_model_async_event_target.AsyncEventTarget.md)

  ↳ **`Parser`**

## Table of contents

### Constructors

- [constructor](lib_parser.Parser.md#constructor)

### Properties

- [listeners](lib_parser.Parser.md#listeners)

### Methods

- [addEventListener](lib_parser.Parser.md#addeventlistener)
- [addSuite](lib_parser.Parser.md#addsuite)
- [addTest](lib_parser.Parser.md#addtest)
- [afterAll](lib_parser.Parser.md#afterall)
- [afterEach](lib_parser.Parser.md#aftereach)
- [beforeAll](lib_parser.Parser.md#beforeall)
- [beforeEach](lib_parser.Parser.md#beforeeach)
- [dispatchEvent](lib_parser.Parser.md#dispatchevent)
- [notifyStderrEvent](lib_parser.Parser.md#notifystderrevent)
- [notifyStdoutEvent](lib_parser.Parser.md#notifystdoutevent)
- [onNewSuite](lib_parser.Parser.md#onnewsuite)
- [onNewTest](lib_parser.Parser.md#onnewtest)
- [onParseError](lib_parser.Parser.md#onparseerror)
- [onStderr](lib_parser.Parser.md#onstderr)
- [onStdout](lib_parser.Parser.md#onstdout)
- [parse](lib_parser.Parser.md#parse)
- [parseNode](lib_parser.Parser.md#parsenode)
- [removeEventListener](lib_parser.Parser.md#removeeventlistener)
- [skipSuite](lib_parser.Parser.md#skipsuite)
- [skipTest](lib_parser.Parser.md#skiptest)

## Constructors

### constructor

• **new Parser**(`context`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](lib_model_context.Context.md) |
| `init` | `Partial`<[`Parser`](lib_parser.Parser.md)\> |

#### Overrides

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[constructor](lib_model_async_event_target.AsyncEventTarget.md#constructor)

#### Defined in

lib/parser.ts:49

## Properties

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

### addSuite

▸ **addSuite**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:55

___

### addTest

▸ **addTest**(`name`, `callback`): [`TestNode`](lib_model_nodes.TestNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | () => `any` |

#### Returns

[`TestNode`](lib_model_nodes.TestNode.md)

#### Defined in

lib/parser.ts:79

___

### afterAll

▸ **afterAll**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:107

___

### afterEach

▸ **afterEach**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:115

___

### beforeAll

▸ **beforeAll**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:103

___

### beforeEach

▸ **beforeEach**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:111

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

lib/parser.ts:151

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

lib/parser.ts:141

___

### onNewSuite

▸ **onNewSuite**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`NewSuiteEvent`](lib_model_events.NewSuiteEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:28

___

### onNewTest

▸ **onNewTest**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`NewTestEvent`](lib_model_events.NewTestEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:32

___

### onParseError

▸ **onParseError**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`ParseErrorEvent`](lib_model_events.ParseErrorEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:36

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

lib/parser.ts:44

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

lib/parser.ts:40

___

### parse

▸ **parse**(`root`): `Promise`<``null`` \| [`SuiteNode`](lib_model_nodes.SuiteNode.md)\>

Parses a suite and builds a tree of SuiteNode and TestNode objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`SuiteNode`](lib_model_nodes.SuiteNode.md) |

#### Returns

`Promise`<``null`` \| [`SuiteNode`](lib_model_nodes.SuiteNode.md)\>

#### Defined in

lib/parser.ts:122

___

### parseNode

▸ **parseNode**(`node`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/parser.ts:161

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

### skipSuite

▸ **skipSuite**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:65

___

### skipTest

▸ **skipTest**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

lib/parser.ts:90
