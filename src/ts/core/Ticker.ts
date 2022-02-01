import EventEmitter from "../EventEmitter";

export default class Ticker {
    private _interval: number;
    private _timer: NodeJS.Timer | null;
    private eventEmmitter: EventEmitter<() => void>;

    constructor(tickPerSecond: number) {
        this._interval = 1000 / tickPerSecond;
    }

    start(): void {
        this._timer = setInterval(() => {
            this.eventEmmitter.fire();
        }, this._interval);
    }
    stop(): void {
        if (this._timer == null) return;
        clearInterval(this._timer);
        this._timer = null;
    }
    subscribe(callback: Function): void {}
}
