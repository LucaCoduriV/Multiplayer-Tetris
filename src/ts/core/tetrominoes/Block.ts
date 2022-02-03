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

    static blockFromArray(array: number[][], color: Color): Block[] {
        console.log(array);
        let result = [];
        for (let y = 0; y < array.length; y++) {
            for (let x = 0; x < array[0].length; x++) {
                if (array[y][x] == 1) {
                    result.push(new Block(new Vector(x, y), color));
                }
            }
        }
        return result;
    }
}
