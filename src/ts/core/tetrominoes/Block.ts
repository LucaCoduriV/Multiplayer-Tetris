import { Vector } from "Vector2d";
import Color from "./Color";

export default class Block {
    private _position: Vector;
    private _color: Color;

    constructor(position: Vector, color: Color) {
        this._position = position;
        this._color = color;
    }

    get color(): Color {
        return this._color;
    }

    get position(): Vector {
        return this._position;
    }
    set position(position: Vector) {
        this._position = position;
    }
}
