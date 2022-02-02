import { Vector } from "vector2d";
import Block from "./Block";
import Color from "./Color";
import Shape from "./Shape";

export default class JShape extends Shape {
    constructor(position: Vector) {
        const COLOR = Color.BLUE;
        const BLOCKS: Block[] = [
            new Block(new Vector(1, 0), COLOR),
            new Block(new Vector(1, 1), COLOR),
            new Block(new Vector(1, 2), COLOR),
            new Block(new Vector(0, 2), COLOR),
        ];

        super(position, new Vector(0, 0), BLOCKS);
    }
}
