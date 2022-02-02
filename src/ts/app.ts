import TetrisView from "./view/TetrisView";
import GameController from "./GameController";
import Board from "./core/Board";
import IControllerView from "./view/interfaces/IControllerView";

class Tetris {
    private _ctx: CanvasRenderingContext2D;
    private _tetrisView: TetrisView;
    private _controller: IControllerView;

    constructor() {
        const c = document.getElementById("canvas") as HTMLCanvasElement;
        this._ctx = c.getContext("2d");
        this._controller = new GameController(new Board(10, 20, 1));
        this._tetrisView = new TetrisView(this._controller, this._ctx);
    }

    init() {
        this._controller.start();
    }
}

new Tetris().init();
