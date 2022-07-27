[yerb](../README.md) / [Exports](../modules.md) / [lib/model/nodes](../modules/lib_model_nodes.md) / BaseNode

# Class: BaseNode

[lib/model/nodes](../modules/lib_model_nodes.md).BaseNode

## Hierarchy

- **`BaseNode`**

  ↳ [`TestNode`](lib_model_nodes.TestNode.md)

  ↳ [`SuiteNode`](lib_model_nodes.SuiteNode.md)

## Table of contents

### Constructors

- [constructor](lib_model_nodes.BaseNode.md#constructor)

### Properties

- [errors](lib_model_nodes.BaseNode.md#errors)
- [name](lib_model_nodes.BaseNode.md#name)
- [nodeId](lib_model_nodes.BaseNode.md#nodeid)
- [parent](lib_model_nodes.BaseNode.md#parent)
- [state](lib_model_nodes.BaseNode.md#state)

### Methods

- [fail](lib_model_nodes.BaseNode.md#fail)
- [skip](lib_model_nodes.BaseNode.md#skip)

## Constructors

### constructor

• **new BaseNode**()

## Properties

### errors

• **errors**: `Error`[] = `[]`

Errors, if any.

If a suite failed due to child test errors, this may be empty in the suite node.
In that case the test node will contain the errors[].

#### Defined in

lib/model/nodes.ts:68

___

### name

• **name**: `string` = `""`

Test or suite name

#### Defined in

lib/model/nodes.ts:58

___

### nodeId

• **nodeId**: `number` = `0`

The current file name & nodeId identify this state for syncing test state between worker & manager

#### Defined in

lib/model/nodes.ts:53

___

### parent

• `Optional` **parent**: [`SuiteNode`](lib_model_nodes.SuiteNode.md) = `undefined`

#### Defined in

lib/model/nodes.ts:48

___

### state

• **state**: [`TestState`](lib_model_nodes.TestState.md)

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

#### Defined in

lib/model/nodes.ts:74

___

### skip

▸ **skip**(): `void`

Force this node to skip

#### Returns

`void`

#### Defined in

lib/model/nodes.ts:82
