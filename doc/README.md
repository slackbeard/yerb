yerb / [Exports](modules.md)

# Yerb
An easy-to-use test framework for Typescript.

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
## Features

Yerb was built with a few design goals in mind:

### Parallelization
Parallel testing is as easy as setting `Config.workers` to the number of desired threads.

### Lifecycle Hooks
The main lifecycle events of a test can all be hooked with custom handlers.

### Lightweight
The dependency tree is kept shallow by having boilerplate stuff like colorful logging and arg parsing built-in.

---
## Installation

Install as usual with npm:
```
$ npm install @bchance/yerb
```

Yerb has a very shallow dependency tree

---
## Running

To run your tests, you can specify individual tests as arguments to `yerb`:

```
$ npx yerb myTest.spec.ts ./tests/**/*.spec.ts
```

Or you can add spec file patterns to search for in your config file:
```
// myConfig.ts

import { Config } from 'yerb';

return new Config({
    include: ["myTest.spec.ts", "./tests/**/*.spec.ts"]
})
```

And run `yerb` with your config file:
```
$ npx yerb -c myConfig.ts
```

*See the [API docs](doc/modules.md) for the full API reference.*

*See the [examples](test/examples) for example usage.*

*See the [packaging test](test/packaging) for an example of yerb in a project.*

---
## Spec files

Just like with similar frameworks, tests are organized into spec files - the usual naming convention for spec files is `*.spec.ts`.

## Suites

Spec files contain `describe()` blocks to define suites of tests:
```
describe(description, fn)
```

## Tests
Suites contain `it()` blocks to define individual tests.

```
it(description, fn)
```

Suites can also contain nested `describe()` blocks to define nested tests.

---
## Setup and Teardown

Suites can define setup and teardown methods:

### beforeAll(fn)
Runs `fn` at the start of the current suite, before running any tests or nested suites in the current suite.

### afterAll(fn)
    Runs `fn` at the end of the current suite, after running all tests and nested suites in the current suite.

### beforeEach(fn)
Runs `fn` before each test of the current suite.

If [Config.inheritSetupAndTeardown](doc/classes/lib_model_config.Config.md) is **true** then this setup method applies to all nested suites as well.

### afterEach(fn)
Runs `fn` after each test of the current suite.

If [Config.inheritSetupAndTeardown](doc/classes/lib_model_config.Config.md) is **true** then this teardown method applies to all nested suites as well.

## Config

*See [Config](doc/modules/lib_config.md) for all config options.*

## Event Handlers

There are two contexts for adding custom event handlers:

### Worker Thread
This is where tests are parsed and executed. 

Event handlers can be added to the TestProcessor from your worker init script:

**1. Specify a worker init script in your config**
```
//myConfig.ts

import { Config } from `yerb`;
return new Config({
    workerInitScript: "myWorkerInit.ts"
});
```

**2. Add handlers to the TestProcessor from your init script**
```
//myWorkerInit.ts

import { getTestProcessor, TestCompletedEvent } from `yerb`;

const testProcessor = getTestProcessor();

testProcessor.onTestCompleted((event: TestCompletedEvent) => {
    console.log(`Test completed! Test name: ${event.node.name})`);
});

```

### Manager Thread
The manager thread dispatches and manages worker threads.
Currently there is only one event that can be hooked here, `onResult()`.

Events here run in the manager thread, which means the worker thread will continue executing while these handlers execute. That means these handlers can't "block" the next test from running, nor can they access any data in the worker thread such as the currently running test. 

Event handlers for the manager thread can be added to the TestProcessor from your worker init script:

**1. Specify a manager init script in your config**
```
//myConfig.ts

import { Config } from `yerb`;
return new Config({
    managerInitScript: "myManagerInit.ts"
});
```

**2. Add handlers to the WorkerManager from your init script**
```
//myManagerInit.ts

import { getWorkerManager, ManagerResultEvent } from `yerb`;

const workerManager = getWorkerManager();

workerManager.onResult((event: ManagerResultEvent) => {
    console.log(`Test result received! Test name: ${event.result.name})`);
});

```
