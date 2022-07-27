[yerb](../README.md) / [Exports](../modules.md) / [lib/model/nodes](../modules/lib_model_nodes.md) / TestNode

# Class: TestNode

[lib/model/nodes](../modules/lib_model_nodes.md).TestNode

## Hierarchy

- [`BaseNode`](lib_model_nodes.BaseNode.md)

  ↳ **`TestNode`**

## Table of contents

### Constructors

- [constructor](lib_model_nodes.TestNode.md#constructor)

### Properties

- [errors](lib_model_nodes.TestNode.md#errors)
- [name](lib_model_nodes.TestNode.md#name)
- [nodeId](lib_model_nodes.TestNode.md#nodeid)
- [parent](lib_model_nodes.TestNode.md#parent)
- [state](lib_model_nodes.TestNode.md#state)

### Methods

- [fail](lib_model_nodes.TestNode.md#fail)
- [run](lib_model_nodes.TestNode.md#run)
- [skip](lib_model_nodes.TestNode.md#skip)

## Constructors

### constructor

• **new TestNode**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Partial`<[`TestNode`](lib_model_nodes.TestNode.md)\> |

#### Overrides

[BaseNode](lib_model_nodes.BaseNode.md).[constructor](lib_model_nodes.BaseNode.md#constructor)

#### Defined in

lib/model/nodes.ts:94

## Properties

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

### fail

▸ **fail**(`err`): `void`

Force this node to fail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `any` | Error object |

#### Returns

`void`

#### Inherited from

[BaseNode](lib_model_nodes.BaseNode.md).[fail](lib_model_nodes.BaseNode.md#fail)

#### Defined in

lib/model/nodes.ts:74

___

### run

▸ **run**(): `void`

This will be assigned to the test function once the test is parsed.

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:92

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
