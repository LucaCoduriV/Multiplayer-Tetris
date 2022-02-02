import Board from "./core/Board";
import IControllerView from "./view/interfaces/IControllerView";
import IBlock from "./view/interfaces/IBlock";

export default class GameController implements IControllerView {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
        this._board.addRandomShape();
    }
    /**
     * Permet de démarrer le jeu.
     */
    start(): void {
        setInterval(() => {
            if (this._board.activeShape) {
                this._board.activeShape.moveDown();
            }
        }, 500);
    }
    /**
     * permet de stopper le jeu.
     */
    stop(): void {
        throw new Error("Method not implemented.");
    }
    /**
     * Permet de reset le jeu.
     */
    reset(): void {
        throw new Error("Method not implemented.");
    }

    /**
     * Permet de récupérer les blocs inactifs.
     * @returns Retourne les blocs inactifs.
     */
    getInactiveBlocks(): IBlock[] {
        return this._board.inactiveBlocks.map((block) => {
            return {
                color: block.color.toString(),
                positionX: block.position.getX(),
                positionY: block.position.getY(),
            };
        });
    }
    /**
     * Permet de récupérer les blocs de la forme active.
     * @returns Retourne les blocs de la forme active.
     */
    getCurrentShapeBlocks(): IBlock[] {
        if (!this._board.activeShape) return [];
        return this._board.activeShape.blocks.map((block) => {
            return {
                color: block.color.toString(),
                positionX: block.position.getX(),
                positionY: block.position.getY(),
            };
        });
    }
}
