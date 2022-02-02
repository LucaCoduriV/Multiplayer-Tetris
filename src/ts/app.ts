import PlayFieldUI from "./view/PlayFieldUI";
import GameController from "./GameController";
import { UI_SCALE } from "./config";
import Board from "./core/Board";
import Controller from "./Controller";

class Tetris {
    ctx: CanvasRenderingContext2D;
    playField: PlayFieldUI;
    controller: Controller;

    constructor() {
        const c = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = c.getContext("2d");
        this.ctx.canvas.width = 900 * UI_SCALE;
        this.ctx.canvas.height = 1050 * UI_SCALE;

        this.controller = new GameController(new Board(10, 20, 1));
        this.playField = new PlayFieldUI(10, 20, this.controller);
        requestAnimationFrame(this.render.bind(this));
    }

    render(tFrame: number) {
        requestAnimationFrame(this.render.bind(this));
        this.setBackgroundColor();
        this.playField.render(this.ctx);
    }

    update() {}

    private setBackgroundColor() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}

new Tetris();
