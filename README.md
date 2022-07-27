# Yerb
An easy-to-use testing framework for Typescript.

## Features

Yerb was built with a few design goals in mind:

### Parallelization
Parallel testing is as easy as setting `Config.workers` to the number of desired threads.

### Event Handling
The main lifecycle events of a test can all be hooked with custom handlers.
See [Event Handlers](#event-handlers) for more info.

### Lightweight
The dependency tree is kept shallow by having boilerplate stuff like colorful logging and arg parsing built-in.

### Common-sense behavior
For example: if a setup method fails, the suite fails immediately.

---
## Table of Contents
1. [Overview](#overview)
1. [Installation](#installation)
1. [Running](#running)
1. [Spec files](#spec-files)
    1. [Suites](#suites)
    1. [Tests](#tests)
1. [Context Data](#context-data)
1. [Setup and Teardown](#setup-and-teardown)
1. [Config](#config)
1. [Event Handlers](#event-handlers)
    1. [Worker Thread](#worker-thread)
    1. [Manager Thread](#manager-thread)

---
## Overview

Yerb follows a similar pattern as other rspec-based test frameworks.

Example:
```
// hello.spec.ts

describe("My suite", () => {
    it("My test", async () => {
        ...
    })
})
```

```
$ npx yerb hello.spec.ts
```

---
## Installation

Install as usual with npm:
```
$ npm install @bchance/yerb
```


---
## Running

Basic usage:

```
Usage: npx yerb [options] [specfile]

Options: 
--help, -h                    Show usage
--verbose, -v                 Turn on extra logging for test framework
--config, -c                  Path to config file
```

To run your tests, you can specify individual tests as arguments:

```
$ npx yerb myTest.spec.ts ./tests/**/*.spec.ts
```

Or you can add spec file patterns to search for in your config file:
```
// myConfig.ts

import { Config } from '@bchance/yerb';

return new Config({
    include: ["myTest.spec.ts", "./tests/**/*.spec.ts"]
})
```

And run `yerb` with your config file:
```
$ npx yerb -c myConfig.ts
```


*See the [packaging test](test/packaging) for an example of yerb in a project.*

---
## Spec files

Just like with similar frameworks, tests are organized into spec files - the usual naming convention for spec files is `*.spec.ts`.

*See the [examples](test/examples) for examples of use cases.*

### Suites

Spec files contain `describe()` blocks to define suites of tests:
```
describe(description, fn)
```

A suite can be skipped by adding `.skip`, e.g.
```
describe.skip(...)
```

### Tests
Suites contain `it()` blocks to define individual tests.

```
it(description, fn)
```

A test can be skipped by adding `.skip`, e.g.
```
it.skip(...)
```

Suites can also contain `describe()` blocks to define nested suites.

---
## Setup and Teardown

Suites can define setup and teardown methods:

| Function | Description |
|----------|-------------|
| beforeAll(fn) | Runs `fn` at the start of the current suite, before running any tests or nested suites in the current suite.|
| afterAll(fn) | Runs `fn` at the end of the current suite, after running all tests and nested suites in the current suite.|
| beforeEach(fn) | Runs `fn` before each test of the current suite. If [Config.inheritSetupAndTeardown](doc/classes/lib_model_config.Config.md) is **true** then this setup method applies to all nested suites as well.|
| afterEach(fn) | Runs `fn` after each test of the current suite. If [Config.inheritSetupAndTeardown](doc/classes/lib_model_config.Config.md) is **true** then this teardown method applies to all nested suites as well.|


---
## Context Data

Information about the current test is stored in `TestProcessor.context`.

Call `getTestProcessor()` to get the global `TestProcessor` object.

Example:

```
// hello.spec.ts

import { getTestProcessor } from '@bchance/yerb';

const testProcessor = getTestProcessor();

describe("My suite", () => {

    const currentSuite = testProcessor.context.currentNode;

    console.log(`Hello from ${currentSuite.name}`);

    it("My test", () => {

        const currentTest = testProcessor.context.currentNode;

        console.log(`Hello from ${currentTest.name}`);

    });

});
```

For more information about context data, see [context](doc/modules/lib_model_context.md).

For more information about test nodes, see [nodes](doc/modules/lib_model_nodes.md).

---
## Config

You can use the `-c` option to specify a config file.

Config files can be *.ts or *.js, but must export a default `Config` object.

You can use config files to specify spec file patterns, init scripts, or set options to control the behavior of `yerb`.

Example:
```
// myConfig.ts

import { Config } from '@bchance/yerb';

export default new Config({
    include: ["test/**/*.spec.ts"],
    workerInitScript: "myWorkerInitScript.ts"
    inheritSetupAndTeardown: true,
});
```

```
$ npx yerb -c myConfig.ts
```
*See [Config](doc/modules/lib_config.md) for all config options.*

---
## Event Handlers

There are two contexts for adding custom event handlers:

### Worker Thread

This is where tests are parsed and executed. 

*See [TestProcessor](doc/classes/lib_test_processor.TestProcessor.md) for all available handlers in the worker thread.*

Event handlers can be added to the TestProcessor from your worker init script:

**1. Specify a worker init script in your config**
```
//myConfig.ts

import { Config } from '@bchance/yerb';
return new Config({
    workerInitScript: "myWorkerInit.ts"
});
```

**2. Add handlers to the TestProcessor from your init script**
```
//myWorkerInit.ts

import { getTestProcessor, TestCompletedEvent } from '@bchance/yerb';

const testProcessor = getTestProcessor();

testProcessor.onTestCompleted((event: TestCompletedEvent) => {
    console.log(`Test completed! Test name: ${event.node.name})`);
});

```


### Manager Thread
The manager thread dispatches and manages worker threads.
Currently there is only one event that can be hooked here, `onResult()`.

*Note: Manager events run in the manager thread, which means the worker thread will continue executing while these handlers execute. That means these handlers can't "block" the next test from running, nor can they access any data in the worker thread such as the currently running test.*


Event handlers for the manager thread can be added to the WorkerManager from your manager init script:

**1. Specify a manager init script in your config**
```
//myConfig.ts

import { Config } from '@bchance/yerb';
return new Config({
    managerInitScript: "myManagerInit.ts"
});
```

**2. Add handlers to the WorkerManager from your init script**
```
//myManagerInit.ts

import { getWorkerManager, ManagerResultEvent } from '@bchance/yerb';

const workerManager = getWorkerManager();

workerManager.onResult((event: ManagerResultEvent) => {
    console.log(`Test result received! Test name: ${event.result.name})`);
});

```

*See the [results module](doc/classes/lib_model_results.BaseResult.md) for info on the structure of test results*