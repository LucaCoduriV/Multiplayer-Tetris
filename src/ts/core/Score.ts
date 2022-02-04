export default class Score {
    static readonly POINT_PER_LINE = [40, 100, 300, 1200];

    private _score: number;

    constructor() {
        this._score = 0;
    }

    addPoint(lvl: number, nbLine: number) {
        this._score += Score.POINT_PER_LINE[nbLine - 1] * (lvl + 1);
        console.log(this._score);
    }

    get score(): number {
        return this._score;
    }

    reset(): void {
        this._score = 0;
    }
}
