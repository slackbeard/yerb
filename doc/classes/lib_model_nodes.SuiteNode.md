[yerb](../README.md) / [Exports](../modules.md) / [lib/model/nodes](../modules/lib_model_nodes.md) / SuiteNode

# Class: SuiteNode

[lib/model/nodes](../modules/lib_model_nodes.md).SuiteNode

## Hierarchy

- [`BaseNode`](lib_model_nodes.BaseNode.md)

  ↳ **`SuiteNode`**

## Table of contents

### Constructors

- [constructor](lib_model_nodes.SuiteNode.md#constructor)

### Properties

- [afterAllCallbacks](lib_model_nodes.SuiteNode.md#afterallcallbacks)
- [afterEachCallbacks](lib_model_nodes.SuiteNode.md#aftereachcallbacks)
- [beforeAllCallbacks](lib_model_nodes.SuiteNode.md#beforeallcallbacks)
- [beforeEachCallbacks](lib_model_nodes.SuiteNode.md#beforeeachcallbacks)
- [children](lib_model_nodes.SuiteNode.md#children)
- [errors](lib_model_nodes.SuiteNode.md#errors)
- [name](lib_model_nodes.SuiteNode.md#name)
- [nodeId](lib_model_nodes.SuiteNode.md#nodeid)
- [parent](lib_model_nodes.SuiteNode.md#parent)
- [state](lib_model_nodes.SuiteNode.md#state)

### Methods

- [addChild](lib_model_nodes.SuiteNode.md#addchild)
- [afterAll](lib_model_nodes.SuiteNode.md#afterall)
- [afterEach](lib_model_nodes.SuiteNode.md#aftereach)
- [beforeAll](lib_model_nodes.SuiteNode.md#beforeall)
- [beforeEach](lib_model_nodes.SuiteNode.md#beforeeach)
- [fail](lib_model_nodes.SuiteNode.md#fail)
- [parse](lib_model_nodes.SuiteNode.md#parse)
- [skip](lib_model_nodes.SuiteNode.md#skip)

## Constructors

### constructor

• **new SuiteNode**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Partial`<[`SuiteNode`](lib_model_nodes.SuiteNode.md)\> |

#### Overrides

[BaseNode](lib_model_nodes.BaseNode.md).[constructor](lib_model_nodes.BaseNode.md#constructor)

#### Defined in

lib/model/nodes.ts:170

## Properties

### afterAllCallbacks

• **afterAllCallbacks**: `any`[] = `[]`

#### Defined in

lib/model/nodes.ts:109

___

### afterEachCallbacks

• **afterEachCallbacks**: `any`[] = `[]`

#### Defined in

lib/model/nodes.ts:112

___

### beforeAllCallbacks

• **beforeAllCallbacks**: `any`[] = `[]`

#### Defined in

lib/model/nodes.ts:108

___

### beforeEachCallbacks

• **beforeEachCallbacks**: `any`[] = `[]`

#### Defined in

lib/model/nodes.ts:111

___

### children

• **children**: [`BaseNode`](lib_model_nodes.BaseNode.md)[] = `[]`

#### Defined in

lib/model/nodes.ts:114

___

### errors

• **errors**: `Error`[] = `[]`

Errors, if any.

If a suite failed due to child test errors, this may be empty in the suite node.
In that case the test node will contain the errors[].

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[errors](lib_model_nodes.BaseNode.md#errors)

#### Defined in

lib/model/nodes.ts:68

___

### name

• **name**: `string` = `""`

Test or suite name

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[name](lib_model_nodes.BaseNode.md#name)

#### Defined in

lib/model/nodes.ts:58

___

### nodeId

• **nodeId**: `number` = `0`

The current file name & nodeId identify this state for syncing test state between worker & manager

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[nodeId](lib_model_nodes.BaseNode.md#nodeid)

#### Defined in

lib/model/nodes.ts:53

___

### parent

• `Optional` **parent**: [`SuiteNode`](lib_model_nodes.SuiteNode.md) = `undefined`

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[parent](lib_model_nodes.BaseNode.md#parent)

#### Defined in

lib/model/nodes.ts:48

___

### state

• **state**: [`TestState`](lib_model_nodes.TestState.md)

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[state](lib_model_nodes.BaseNode.md#state)

#### Defined in

lib/model/nodes.ts:60

## Methods

### addChild

▸ **addChild**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`BaseNode`](lib_model_nodes.BaseNode.md) |

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:153

___

### afterAll

▸ **afterAll**(`callback`): `void`

Add a afterAll() callback to be called at the end of the suite.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:139

___

### afterEach

▸ **afterEach**(`callback`): `void`

Add a afterEach() callback to be called after each test.
The behavior of afterEach() is controlled by [["inheritSetupAndTeardown"]](lib_model_config.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:149

___

### beforeAll

▸ **beforeAll**(`callback`): `void`

Add a beforeAll() callback to be called at the start of a suite.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:120

___

### beforeEach

▸ **beforeEach**(`callback`): `void`

Add a beforeEach() callback to be called before each test.
The behavior of beforeEach() is controlled by [["inheritSetupAndTeardown"]](lib_model_config.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:130

___

### fail

▸ **fail**(`err`): `void`

Force this suite to fail, and skip all pending child nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `any` | Error |

#### Returns

`void`

#### Overrides

[BaseNode](lib_model_nodes.BaseNode.md).[fail](lib_model_nodes.BaseNode.md#fail)

#### Defined in

lib/model/nodes.ts:162

___

### parse

▸ **parse**(): `void`

This will be assigned to the describe() body once the suite is parsed.

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:106

___

### skip

▸ **skip**(): `void`

Force this node to skip

#### Returns

`void`

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[skip](lib_model_nodes.BaseNode.md#skip)

#### Defined in

lib/model/nodes.ts:82
