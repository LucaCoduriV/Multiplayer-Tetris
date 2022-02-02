import { Vector } from "vector2d";
import Color from "../core/tetrominoes/Color";
import BlockUI from "./BlockUI";
import Renderer from "./Renderer";
import { UI_SCALE } from "../config";

export default class PlayFieldUI implements Renderer {
    static PLAY_AREA_OFFSET = new Vector(BlockUI.BLOCK_WIDTH, 0);
    private renderers: Renderer[] = [];
    private _height: number;
    private _width: number;

    constructor(width: number, height: number) {
        this._height = height;
        this._width = width;

        this.createPlayField();
    }

    static positionOnBoard(position: Vector): Vector {
        return new Vector(
            position.getX() * BlockUI.BLOCK_WIDTH,
            position.getY() * BlockUI.BLOCK_WIDTH
        );
    }

    render(ctx: CanvasRenderingContext2D) {
        this.renderers.forEach((renderer) => renderer.render(ctx));
    }

    private createPlayField(): void {
        for (let i = 0; i < this._height; i++) {
            this.renderers.push(new BlockUI(new Vector(0, i), Color.GREY));
            this.renderers.push(new BlockUI(new Vector(this._width, i), Color.GREY));
        }
        for (let i = 0; i < this._width + 1; i++) {
            this.renderers.push(new BlockUI(new Vector(i, this._height), Color.GREY));
        }
    }
}
