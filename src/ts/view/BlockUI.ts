import { Vector } from "vector2d";
import { UI_SCALE } from "../config";
import Color from "../core/tetrominoes/Color";
import PlayFieldUI from "../view/PlayFieldUI";
import Renderer from "./Renderer";

export default class BlockUI implements Renderer {
    static readonly BLOCK_WIDTH = 50 * UI_SCALE;

    private _position: Vector;
    private _color: Color;

    constructor(position: Vector, color: Color) {
        this._position = position;
        this._color = color;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this._color.toString();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        const position = this.positionOnBoard();
        ctx.rect(position.x, position.y, BlockUI.BLOCK_WIDTH, BlockUI.BLOCK_WIDTH);
        ctx.fill();
        ctx.stroke();
    }

    private positionOnBoard(): Vector {
        return PlayFieldUI.positionOnBoard(this._position);
    }
}
