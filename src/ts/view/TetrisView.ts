import { UI_SCALE } from "../config";
import IControllerView from "./interfaces/IControllerView";
import PlayFieldUI from "./PlayFieldUI";

export default class TetrisView {
    private _controller: IControllerView;
    private _playFields: PlayFieldUI[] = [];
    private _ctx: CanvasRenderingContext2D;

    constructor(controller: IControllerView, ctx: CanvasRenderingContext2D) {
        this._controller = controller;
        this._playFields.push(new PlayFieldUI(10, 20, controller));
        this._ctx = ctx;
        this._ctx.canvas.width = 900 * UI_SCALE;
        this._ctx.canvas.height = 1050 * UI_SCALE;

        requestAnimationFrame(this.render.bind(this));
    }

    render(tFrame: number) {
        requestAnimationFrame(this.render.bind(this));
        this.setBackgroundColor();
        this._playFields[0].render(this._ctx);
    }

    update() {}

    private setBackgroundColor() {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }
}
