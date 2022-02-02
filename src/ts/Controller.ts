import Block from "./core/tetrominoes/Block";

export default interface Controller {
    getInactiveBlocks(): Block[];
    getCurrentShapeBlocks(): Block[];
}
