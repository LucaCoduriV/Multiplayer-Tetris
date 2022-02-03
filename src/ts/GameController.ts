import Board from "./core/Board";
import ActionController from "./ActionController";
import IControllerView from "./view/interfaces/IControllerView";
import IBlock from "./view/interfaces/IBlock";
import Shape from "./core/tetrominoes/Shape";

export default class GameController implements IControllerView {
    private _board: Board;
    private _actionController: ActionController;
    private _currentShape: Shape;

    constructor(board: Board) {
        this._board = board;
        this._actionController = new ActionController();
    }

    private asignActions() {
        this._actionController.onRight.subscribe(this.moveRight);

        this._actionController.onLeft.subscribe(this.moveLeft);

        this._actionController.onUp.subscribe(this.moveUp);

        this._actionController.onDown.subscribe(this.moveDown);

        this._actionController.onRotateLeft.subscribe(this.rotateLeft);

        this._actionController.onRotateRight.subscribe(this.rotateRight);
    }

    private moveUp() {
        this._currentShape?.moveUp();
    }

    private moveLeft() {
        this._currentShape?.moveLeft();
    }

    private moveRight() {
        this._currentShape?.moveRight();
    }

    private moveDown() {
        this._currentShape?.moveDown();
    }

    private rotateLeft() {
        this._currentShape?.rotateLeft();
    }

    private rotateRight() {
        this._currentShape?.rotateRight();
    }

    /**
     * Permet de démarrer le jeu.
     */
    start(): void {
        this._board.addRandomShape();
        this.asignActions();

        // setInterval(() => {
        //     if (this._board.activeShape) {
        //         this._board.activeShape.moveDown();
        //     }
        // }, 500);
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
