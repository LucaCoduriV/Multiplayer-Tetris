import { AbstractVector, Vector } from "vector2d";
import Board from "../Board";
import Block from "./Block";

export default abstract class Shape {
    protected _rotation: number;
    protected _position: Vector;
    protected _rotationCenter: Vector;
    protected _blocks: Block[][];
    protected _board: Board;

    constructor(position: Vector, rotationCenter: Vector, blocks: Block[][]) {
        this._blocks = blocks;
        this._rotation = 0; // nombre entre 0 et 3
        this._position = position;
        this._rotationCenter = rotationCenter;
    }

    set rotation(rotation: number) {
        if (rotation < 0) rotation = 3;
        else if (rotation > 3) rotation = 0;
        this._rotation = rotation;
    }

    moveUp(): boolean {
        this._position = new Vector(this._position.getX(), this._position.getY()).add(
            new Vector(0, -1)
        );
        return true;
    }

    moveDown(): boolean {
        this._position.add(new Vector(0, 1));
        return true;
    }

    moveLeft(): boolean {
        this._position.add(new Vector(-1, 0));
        return true;
    }

    moveRight(): boolean {
        this._position.add(new Vector(1, 0));
        return true;
    }

    rotateLeft(): boolean {
        this.rotation = this._rotation - 1;
        return true;
    }

    rotateRight(): boolean {
        this.rotation = this._rotation + 1;
        return true;
    }

    /**
     * Retourne un tableau contenant les blocks de la forme avec la position relative à la board.
     */
    get blocks(): Block[] {
        return this._blocks[this._rotation].map((block) => {
            return new Block(
                new Vector(block.position.getX(), block.position.getY()).add(this._position),
                block.color
            );
        });
    }

    private isOverlapping(): boolean {
        return false;
    }
}
