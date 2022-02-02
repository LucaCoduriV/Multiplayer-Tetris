import { Vector } from "vector2d";
import Color from "../core/tetrominoes/Color";
import BlockUI from "./BlockUI";
import Renderer from "./interfaces/Renderer";
import IControllerView from "./interfaces/IControllerView";
import { UI_SCALE } from "../config";

export default class PlayFieldUI implements Renderer {
    static PLAY_AREA_OFFSET = new Vector(1, 0);
    private _height: number;
    private _width: number;
    private _controller: IControllerView;

    constructor(width: number, height: number, Controller: IControllerView) {
        this._height = height;
        this._width = width;
        this._controller = Controller;
    }

    render(ctx: CanvasRenderingContext2D) {
        this.drawPlayField(ctx);
        this.drawInactiveBlocks(ctx);
        this.drawShape(ctx);
    }

    /**
     * Permet de dessiner le terrain de jeu.
     * @param ctx context du canevas
     */
    private drawPlayField(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this._height; i++) {
            new BlockUI(new Vector(0, i), Color.GREY).render(ctx);
            new BlockUI(new Vector(this._width, i), Color.GREY).render(ctx);
        }
        for (let i = 0; i < this._width + 1; i++) {
            new BlockUI(new Vector(i, this._height), Color.GREY).render(ctx);
        }
    }

    /**
     * Permet de dessiner les blocs inactifs.
     * @param ctx context du canevas
     */
    private drawInactiveBlocks(ctx: CanvasRenderingContext2D): void {
        const inactiveBlocks = this._controller.getInactiveBlocks();
        inactiveBlocks.forEach((block) => {
            const newPos = new Vector(block.positionX, block.positionY).add(
                PlayFieldUI.PLAY_AREA_OFFSET
            );
            const blockUI = new BlockUI(newPos, new Color(block.color));
            blockUI.render(ctx);
        });
    }

    /**
     * Permet de dessiner la forme actuelement utilisé par le joueur.
     * @param ctx context du canevas
     */
    private drawShape(ctx: CanvasRenderingContext2D): void {
        const currentShapeBlocks = this._controller.getCurrentShapeBlocks();
        currentShapeBlocks.forEach((block) => {
            const newPos = new Vector(block.positionX, block.positionY).add(
                PlayFieldUI.PLAY_AREA_OFFSET
            );
            const blockUI = new BlockUI(newPos, new Color(block.color));
            blockUI.render(ctx);
        });
    }
}
