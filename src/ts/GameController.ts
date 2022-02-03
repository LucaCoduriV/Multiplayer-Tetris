import Board from "./core/Board";
import ActionController from "./ActionController";
import IControllerView from "./view/interfaces/IControllerView";
import IBlock from "./view/interfaces/IBlock";
import Shape from "./core/tetrominoes/Shape";
import Ticker from "./core/Ticker";

export default class GameController implements IControllerView {
    private _board: Board;
    private _actionController: ActionController;
    private _ticker: Ticker;

    constructor(board: Board) {
        this._board = board;
        this._actionController = new ActionController();
        this._ticker = new Ticker(2);
        this._ticker.subscribe(this.moveDown.bind(this));
    }

    private asignActions() {
        this._actionController.onRight.subscribe(this.moveRight.bind(this));

        this._actionController.onLeft.subscribe(this.moveLeft.bind(this));

        this._actionController.onUp.subscribe(this.moveUp.bind(this));

        this._actionController.onDown.subscribe(this.moveDown.bind(this));

        this._actionController.onRotateLeft.subscribe(this.rotateLeft.bind(this));

        this._actionController.onRotateRight.subscribe(this.rotateRight.bind(this));
    }

    private moveUp() {
        this._board.activeShape?.moveUp();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.moveDown();
        }
    }

    private moveLeft() {
        this._board.activeShape?.moveLeft();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.moveRight();
        }
    }

    private moveRight() {
        this._board.activeShape?.moveRight();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.moveLeft();
        }
    }

    private moveDown() {
        this._board.activeShape?.moveDown();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.moveUp();
            this._board.disableActiveShape();
            this._board.addRandomShape();
        }
    }

    private rotateLeft() {
        this._board.activeShape?.rotateLeft();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.rotateRight();
            this._board.disableActiveShape();
            this._board.addRandomShape();
        }
    }

    private rotateRight() {
        this._board.activeShape?.rotateRight();
        if (this._board.checkCollision() || this._board.checkOutOfBounds()) {
            this._board.activeShape?.rotateLeft();
        }
    }

    /**
     * Permet de démarrer le jeu.
     */
    start(): void {
        this._ticker.start();
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
