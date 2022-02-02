import { Vector } from "vector2d";
import JShape from "./tetrominoes/JShape";
import LShape from "./tetrominoes/LShape";
import Shape from "./tetrominoes/Shape";
import SShape from "./tetrominoes/SShape";
import TShape from "./tetrominoes/TShape";
import ZShape from "./tetrominoes/ZShape";
import IShape from "./tetrominoes/IShape";

export default class Board {
    private _shapes: Shape[] = [];
    private _width: number;
    private _height: number;
    private _speed: number;
    private _activeShape: Shape;

    constructor(width: number, height: number, speed: number) {
        this._width = width;
        this._height = height;
        this._speed = speed;
    }

    get activeShape(): Shape {
        return this._activeShape;
    }

    addShape(shape: Shape): void {
        this._shapes.push(shape);
    }
    addRandomShape(): void {
        const shapes = ["L", "Z", "T", "S", "J", "I"];
        switch (shapes[Math.floor(Math.random() * shapes.length)]) {
            case "L":
                this._activeShape = new LShape(new Vector(0, 0), new Vector(0, 0));
                break;
            case "Z":
                this._activeShape = new ZShape(new Vector(0, 0), new Vector(0, 0));
                break;
            case "T":
                this._activeShape = new TShape(new Vector(0, 0), new Vector(0, 0));
                break;
            case "S":
                this._activeShape = new SShape(new Vector(0, 0), new Vector(0, 0));
                break;
            case "J":
                this._activeShape = new JShape(new Vector(0, 0), new Vector(0, 0));
                break;
            case "I":
                this._activeShape = new IShape(new Vector(0, 0), new Vector(0, 0));
                break;
            default:
                throw new Error("Invalid shape");
        }

        this._shapes.push(this._activeShape);
    }
}
