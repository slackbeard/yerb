console.log(`Global scope manager init script`);
import { ManagerResultEvent } from '../../../src/lib/model/events';
import { sleep } from '../../../src/lib/util/sleep';
import { getWorkerManager } from '../../../src/lib/worker-manager';

const workerManager = getWorkerManager();

workerManager.onResult(async (event: ManagerResultEvent) => {
    console.log(`Inside manager onResult, '${event.result.name}' sleeping ...`);
    await sleep(100);
    console.log(`Leaving manager onResult`);
});
