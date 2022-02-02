import PlayFieldUI from "./view/PlayFieldUI";
import { UI_SCALE } from "./config";

class Tetris {
    ctx: CanvasRenderingContext2D;
    boardUI: PlayFieldUI;

    constructor() {
        const c = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = c.getContext("2d");
        this.ctx.canvas.width = 900 * UI_SCALE;
        this.ctx.canvas.height = 1050 * UI_SCALE;

        this.boardUI = new PlayFieldUI(10, 20);
        requestAnimationFrame(this.render.bind(this));
    }

    render(tFrame: number) {
        requestAnimationFrame(this.render.bind(this));
        this.setBackgroundColor();
        this.boardUI.render(this.ctx);
    }

    update() {}

    private setBackgroundColor() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}

new Tetris();
