[yerb](../README.md) / [Exports](../modules.md) / lib/worker-manager

# Module: lib/worker-manager

The worker manager thread dispatches worker threads to process tests.

The number of worker threads is determined by [workers](../classes/lib_model_config.Config.md#workers).

If you specify a manager init script in your config ([managerInitScript](../classes/lib_model_config.Config.md#managerinitscript)),
the init script will be loaded in the manager thread.

From the manager init script you can get a reference to the global WorkerManager with [getWorkerManager](lib_worker_manager.md#getworkermanager).

## Table of contents

### Classes

- [WorkerManager](../classes/lib_worker_manager.WorkerManager.md)

### Functions

- [getWorkerManager](lib_worker_manager.md#getworkermanager)
- [initWorkerManager](lib_worker_manager.md#initworkermanager)

## Functions

### getWorkerManager

▸ **getWorkerManager**(): [`WorkerManager`](../classes/lib_worker_manager.WorkerManager.md)

Get a reference to global WorkerManager object

#### Returns

[`WorkerManager`](../classes/lib_worker_manager.WorkerManager.md)

a reference to global WorkerManager object

#### Defined in

lib/worker-manager.ts:325

___

### initWorkerManager

▸ **initWorkerManager**(`config`): [`WorkerManager`](../classes/lib_worker_manager.WorkerManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](../classes/lib_model_config.Config.md) |

#### Returns

[`WorkerManager`](../classes/lib_worker_manager.WorkerManager.md)

#### Defined in

lib/worker-manager.ts:316
