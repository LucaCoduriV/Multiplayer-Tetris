import { Vector } from "vector2d";
import Block from "./Block";
import Color from "./Color";
import Shape from "./Shape";

export default class IShape extends Shape {
    constructor(position: Vector) {
        const COLOR = Color.PURPLE;
        const BLOCKS: Block[] = [
            new Block(new Vector(0, 0), COLOR),
            new Block(new Vector(1, 0), COLOR),
            new Block(new Vector(2, 0), COLOR),
            new Block(new Vector(3, 0), COLOR),
        ];

        super(position, new Vector(0, 0), BLOCKS);
    }
}
