[yerb](../README.md) / [Exports](../modules.md) / lib/model/nodes

# Module: lib/model/nodes

Test and Suite data structures.

A SuiteNode can have 0 or more children.
Each child node can be a Suite or Test.

A Test is a leaf node, and does not have children.

A Suite represents a `describe()` block.
A Test represents an `it()` block.

## Table of contents

### Enumerations

- [TestStatus](../enums/lib_model_nodes.TestStatus.md)

### Classes

- [BaseNode](../classes/lib_model_nodes.BaseNode.md)
- [SuiteNode](../classes/lib_model_nodes.SuiteNode.md)
- [TestNode](../classes/lib_model_nodes.TestNode.md)
- [TestState](../classes/lib_model_nodes.TestState.md)
