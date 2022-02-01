export default class EventEmitter<T extends Function> {
    private _listeners: Array<T>;
    constructor() {
        this._listeners = [];
    }
    subscribe(callback: T): void {
        this._listeners.push(callback);
    }
    unsubscribe(callback: T): void {
        this._listeners = this._listeners.filter((listener) => listener !== callback);
    }
    fire(...args: any): void {
        this._listeners.forEach((listener) => listener(...args));
    }
}
