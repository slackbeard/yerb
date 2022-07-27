[yerb](../README.md) / [Exports](../modules.md) / [lib/test-processor](../modules/lib_test_processor.md) / TestProcessor

# Class: TestProcessor

[lib/test-processor](../modules/lib_test_processor.md).TestProcessor

Test Processor parses and runs spec files.

See [Parser](lib_parser.Parser.md) and [Runner](lib_runner.Runner.md).

Tests and spec init scripts can get a reference to the test processor by calling [getTestProcessor](../modules/lib_test_processor.md#gettestprocessor).

## Hierarchy

- [`AsyncEventTarget`](lib_model_async_event_target.AsyncEventTarget.md)

  ↳ **`TestProcessor`**

## Table of contents

### Constructors

- [constructor](lib_test_processor.TestProcessor.md#constructor)

### Properties

- [context](lib_test_processor.TestProcessor.md#context)
- [listeners](lib_test_processor.TestProcessor.md#listeners)
- [parser](lib_test_processor.TestProcessor.md#parser)
- [runner](lib_test_processor.TestProcessor.md#runner)

### Methods

- [addEventListener](lib_test_processor.TestProcessor.md#addeventlistener)
- [dispatchEvent](lib_test_processor.TestProcessor.md#dispatchevent)
- [onBeforeSuiteStart](lib_test_processor.TestProcessor.md#onbeforesuitestart)
- [onBeforeTestStart](lib_test_processor.TestProcessor.md#onbeforeteststart)
- [onNewSuite](lib_test_processor.TestProcessor.md#onnewsuite)
- [onNewTest](lib_test_processor.TestProcessor.md#onnewtest)
- [onParseError](lib_test_processor.TestProcessor.md#onparseerror)
- [onStderr](lib_test_processor.TestProcessor.md#onstderr)
- [onStdout](lib_test_processor.TestProcessor.md#onstdout)
- [onSuiteCompleted](lib_test_processor.TestProcessor.md#onsuitecompleted)
- [onTestCompleted](lib_test_processor.TestProcessor.md#ontestcompleted)
- [processAllSpecFiles](lib_test_processor.TestProcessor.md#processallspecfiles)
- [processSpecFile](lib_test_processor.TestProcessor.md#processspecfile)
- [removeEventListener](lib_test_processor.TestProcessor.md#removeeventlistener)

## Constructors

### constructor

• **new TestProcessor**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](lib_model_config.Config.md) |

#### Overrides

[AsyncEventTarget](lib_model_async_event_target.AsyncEventTarget.md).[constructor](lib_model_async_event_target.AsyncEventTarget.md#constructor)

#### Defined in

lib/test-processor.ts:24

## Properties

### context

• **context**: [`Context`](lib_model_context.Context.md)

#### Defined in

lib/test-processor.ts:22

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

### parser

• **parser**: [`Parser`](lib_parser.Parser.md)

#### Defined in

lib/test-processor.ts:20

___

### runner

• **runner**: [`Runner`](lib_runner.Runner.md)

#### Defined in

lib/test-processor.ts:21

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

### onBeforeSuiteStart

▸ **onBeforeSuiteStart**(`callback`): `void`

Add a handler to run before each suite.
Note: unlike `beforeAll()`, this handler will apply to all suites, not just the current one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`BeforeSuiteStartEvent`](lib_model_events.BeforeSuiteStartEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:73

___

### onBeforeTestStart

▸ **onBeforeTestStart**(`callback`): `void`

Add a handler to run before each test.
Note: unlike `beforeEach()`, this handler will apply to all suites, not just the current one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`BeforeTestStartEvent`](lib_model_events.BeforeTestStartEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:65

___

### onNewSuite

▸ **onNewSuite**(`callback`): `void`

Add a handler to run when a new suite is found by the parser.
This happens when the parser encounters a `describe()` block.
This handler is called before the suite is executed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`NewSuiteEvent`](lib_model_events.NewSuiteEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:98

___

### onNewTest

▸ **onNewTest**(`callback`): `void`

Add a handler to run when a new test is found by the parser.
This happens when the parser encounters an `it()` block.
This handler is called before the test is executed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`NewTestEvent`](lib_model_events.NewTestEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:107

___

### onParseError

▸ **onParseError**(`callback`): `void`

Add a handler for parser errors.
This happens when an error is thrown from inside a `describe()` block, not from a test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`ParseErrorEvent`](lib_model_events.ParseErrorEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:115

___

### onStderr

▸ **onStderr**(`callback`): `void`

Add a handler for worker stderr events.
This receives stderr from suites and tests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`StderrEvent`](lib_model_events.StderrEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:56

___

### onStdout

▸ **onStdout**(`callback`): `void`

Add a handler for worker stdout events.
This receives stdout from suites and tests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`StdoutEvent`](lib_model_events.StdoutEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:47

___

### onSuiteCompleted

▸ **onSuiteCompleted**(`callback`): `void`

Add a handler for suite completion.
Examine `event.node.state.status` to see if the suite passed or failed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`SuiteCompletedEvent`](lib_model_events.SuiteCompletedEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:89

___

### onTestCompleted

▸ **onTestCompleted**(`callback`): `void`

Add a handler for test completion.
Examine `event.node.state.status` to see if the test passed or failed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [`TestCompletedEvent`](lib_model_events.TestCompletedEvent.md)) => `any` |

#### Returns

`void`

#### Defined in

lib/test-processor.ts:81

___

### processAllSpecFiles

▸ **processAllSpecFiles**(`fileBatch`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileBatch` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

lib/test-processor.ts:120

___

### processSpecFile

▸ **processSpecFile**(`specPath`): `Promise`<[`SuiteNode`](lib_model_nodes.SuiteNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `specPath` | `string` |

#### Returns

`Promise`<[`SuiteNode`](lib_model_nodes.SuiteNode.md)\>

#### Defined in

lib/test-processor.ts:128

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
