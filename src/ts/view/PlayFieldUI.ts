import { Vector } from "vector2d";
import Color from "../core/tetrominoes/Color";
import BlockUI from "./BlockUI";
import Renderer from "./Renderer";
import Controller from "../Controller";
import { UI_SCALE } from "../config";

export default class PlayFieldUI implements Renderer {
    static PLAY_AREA_OFFSET = new Vector(1, 0);
    private _height: number;
    private _width: number;
    private _controller: Controller;

    constructor(width: number, height: number, Controller: Controller) {
        this._height = height;
        this._width = width;
        this._controller = Controller;
    }

    static positionOnBoard(position: Vector): Vector {
        return new Vector(
            position.getX() * BlockUI.BLOCK_WIDTH,
            position.getY() * BlockUI.BLOCK_WIDTH
        );
    }

    render(ctx: CanvasRenderingContext2D) {
        this.drawPlayField(ctx);
        this.drawInactiveBlocks(ctx);
        this.drawCurrentShapeBlocks(ctx);
    }

    private drawPlayField(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this._height; i++) {
            new BlockUI(new Vector(0, i), Color.GREY).render(ctx);
            new BlockUI(new Vector(this._width, i), Color.GREY).render(ctx);
        }
        for (let i = 0; i < this._width + 1; i++) {
            new BlockUI(new Vector(i, this._height), Color.GREY).render(ctx);
        }
    }

    private drawInactiveBlocks(ctx: CanvasRenderingContext2D): void {
        const inactiveBlocks = this._controller.getInactiveBlocks();
        inactiveBlocks.forEach((block) => {
            const newPos = new Vector(block.position.getX(), block.position.getY()).add(
                PlayFieldUI.PLAY_AREA_OFFSET
            );
            const blockUI = new BlockUI(newPos, block.color);
            blockUI.render(ctx);
        });
    }

    private drawCurrentShapeBlocks(ctx: CanvasRenderingContext2D): void {
        const currentShapeBlocks = this._controller.getCurrentShapeBlocks();
        currentShapeBlocks.forEach((block) => {
            const newPos = new Vector(block.position.getX(), block.position.getY()).add(
                PlayFieldUI.PLAY_AREA_OFFSET
            );
            const blockUI = new BlockUI(newPos, block.color);
            blockUI.render(ctx);
        });
    }
}
