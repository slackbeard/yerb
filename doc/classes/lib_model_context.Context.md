[yerb](../README.md) / [Exports](../modules.md) / [lib/model/context](../modules/lib_model_context.md) / Context

# Class: Context

[lib/model/context](../modules/lib_model_context.md).Context

Information about the current context.

For example, to examine the currently running test:

```
// hello.spec.ts

import { getTestProcessor } from 'yerb';

const testProcessor = getTestProcessor();

describe("my suite", () => {
  
  it("my test", () => {

    console.log(`Hello from test "${testProcessor.context.currentNode.name")`);

  });

});
```

## Table of contents

### Constructors

- [constructor](lib_model_context.Context.md#constructor)

### Properties

- [config](lib_model_context.Context.md#config)
- [currentFile](lib_model_context.Context.md#currentfile)
- [currentNode](lib_model_context.Context.md#currentnode)

## Constructors

### constructor

• **new Context**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`Config`](lib_model_config.Config.md) |

#### Defined in

lib/model/context.ts:47

## Properties

### config

• `Optional` **config**: [`Config`](lib_model_config.Config.md)

Reference to the config object being used

#### Defined in

lib/model/context.ts:33

___

### currentFile

• `Optional` **currentFile**: [`SuiteNode`](lib_model_nodes.SuiteNode.md)

Reference to the current file (as a SuiteNode).
E.g. the current file name would be `currentFile.name`

#### Defined in

lib/model/context.ts:39

___

### currentNode

• **currentNode**: [`BaseNode`](lib_model_nodes.BaseNode.md)

During parse phase, currentNode points at current suite being parsed for tests
During run phase, currentNode points at current test being run

#### Defined in

lib/model/context.ts:45
