import { Vector } from "vector2d";
import Board from "../Board";
import Block from "./Block";

export default abstract class Shape {
    private _rotation: number;
    private _position: Vector;
    private _rotationCenter: Vector;
    private _blocks: Block[];
    private _board: Board;

    constructor(position: Vector, rotationCenter: Vector, blocks: Block[]) {
        this._rotation = 0;
        this._position = position;
        this._rotationCenter = rotationCenter;
    }

    set rotation(rotation: number) {
        this._rotation = rotation;
    }

    moveUp(): boolean {
        return true;
    }

    moveDown(): boolean {
        return true;
    }

    moveLeft(): boolean {
        return true;
    }

    moveRight(): boolean {
        return true;
    }

    rotateLeft(): boolean {
        return true;
    }

    rotateRight(): boolean {
        return true;
    }

    private isOverlapping(): boolean {
        return false;
    }
}
