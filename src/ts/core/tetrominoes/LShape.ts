import { Vector } from "vector2d";
import Block from "./Block";
import Color from "./Color";
import Shape from "./Shape";

export default class LShape extends Shape {
    constructor(position: Vector) {
        const COLOR = Color.GREEN;
        const pos1 = [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ];
        const pos2 = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ];
        const pos3 = [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0],
        ];
        const pos4 = [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];

        const BLOCKS = [
            Block.blockFromArray(pos1, COLOR),
            Block.blockFromArray(pos2, COLOR),
            Block.blockFromArray(pos3, COLOR),
            Block.blockFromArray(pos4, COLOR),
        ];

        super(position, new Vector(1, 1), BLOCKS);
    }
}
