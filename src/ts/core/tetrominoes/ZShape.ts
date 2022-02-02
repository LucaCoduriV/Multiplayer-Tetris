import { Vector } from "vector2d";
import Block from "./Block";
import Shape from "./Shape";

export default class LShape extends Shape {
    constructor(position: Vector, rotationCenter: Vector) {
        const blocks: Block[] = [];

        super(position, rotationCenter, blocks);
    }
}
