import Board from "./core/Board";
import Block from "./core/tetrominoes/Block";
import Controller from "./Controller";

export default class GameController implements Controller {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
        this._board.addRandomShape();
    }

    getInactiveBlocks(): Block[] {
        return this._board.inactiveBlocks;
    }

    getCurrentShapeBlocks(): Block[] {
        if (!this._board.activeShape) return [];
        return this._board.activeShape.blocks;
    }
}
