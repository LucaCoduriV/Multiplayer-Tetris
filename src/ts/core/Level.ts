import EventEmitter from "../EventEmitter";

export default class Level {
    private _level = 0;
    private _nbLineCompleted = 0;
    onLevelUp: EventEmitter<(lvl: number) => void>;

    constructor() {
        this.onLevelUp = new EventEmitter<(lvl: number) => void>();
    }

    addLineCompleted(nbLine: number): void {
        this._nbLineCompleted += nbLine;
        if (this._nbLineCompleted >= 10) {
            this._nbLineCompleted = this._nbLineCompleted - 10;
            this._level++;
            this.onLevelUp.fire(this._level);
        }
    }

    get level(): number {
        return this._level;
    }
}
