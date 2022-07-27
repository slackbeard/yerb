import { Event } from "./events";

/**
 * Event Target that waits for all async handlers to finish when events are dispatched.
 */
export class AsyncEventTarget {

    /**
     * Map of event names to array of callbacks
     */
    public listeners: { [key: string]: any[] } = {};

    /**
     * Add an event listener 
     * 
     * @param eventType event type
     * @param listener callback function, can be sync or async.
     */
    addEventListener(eventType: string, listener: any) {
        if (!(eventType in this.listeners)) {
            this.listeners[eventType] = [];
        }

        this.listeners[eventType].push(listener);
    }

    /**
     * Remove listener for an event
     * 
     * @param eventType event type
     * @param listener callback function to remove
     */
    removeEventListener(eventType: string, listener: any) {
        if (eventType in this.listeners) {
            this.listeners[eventType] = this.listeners[eventType].filter((l: any) => (l != listener));
        }
    }

    /**
     * Dispatch event and wait for all handlers to finish, even async ones. 
     * 
     * @param event Event object to dispatch
     */
    async dispatchEvent(event: Event) {
        const eventType = event.type;
        if (!(eventType in this.listeners)) {
            return;
        }

        for (let listener of this.listeners[eventType]) {
            await listener(event);

            if (event.defaultPrevented) {
                return;
            }
        }

    }
}