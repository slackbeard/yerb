[yerb](../README.md) / [Exports](../modules.md) / [lib/model/nodes](../modules/lib_model_nodes.md) / TestState

# Class: TestState

[lib/model/nodes](../modules/lib_model_nodes.md).TestState

## Table of contents

### Constructors

- [constructor](lib_model_nodes.TestState.md#constructor)

### Properties

- [endTime](lib_model_nodes.TestState.md#endtime)
- [startTime](lib_model_nodes.TestState.md#starttime)
- [status](lib_model_nodes.TestState.md#status)

## Constructors

### constructor

• **new TestState**()

## Properties

### endTime

• `Optional` **endTime**: `Date`

#### Defined in

lib/model/nodes.ts:44

___

### startTime

• `Optional` **startTime**: `Date`

#### Defined in

lib/model/nodes.ts:43

___

### status

• **status**: [`TestStatus`](../enums/lib_model_nodes.TestStatus.md) = `TestStatus.INIT`

Test status.
A test will only be run if its in the `INIT` state.

#### Defined in

lib/model/nodes.ts:42
