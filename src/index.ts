export * from './lib/config';
export * from './lib/parser';
export * from './lib/reporter';
export * from './lib/runner';
export * from './lib/test-processor';
export * from './lib/worker-manager';
export * from './lib/model/async-event-target';
export * from './lib/model/config';
export * from './lib/model/context';
export * from './lib/model/events';
export * from './lib/model/messages';
export * from './lib/model/nodes';
export * from './lib/model/results';
export * from './lib/util/logging';
export * from './lib/util/sleep';

import { TestNode } from './lib/model/nodes';

/**
 * Main yerb import module
 * @packageDocumentation
 */

type TestDeclarator = {
    skip: (name: string, callback: (() => any)) => {};
    (name: string, callback: any): TestNode;
};

declare global {
    const describe: TestDeclarator;
    const it: TestDeclarator;

    function beforeAll(callback: any): any;
    function afterAll(callback: any): any;
    function beforeEach(callback: any): any;
    function afterEach(callback: any): any;
}