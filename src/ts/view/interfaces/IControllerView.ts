import IBlock from "./IBlock";

export default interface IControllerView {
    start(): void;
    stop(): void;
    reset(): void;
    getInactiveBlocks(): IBlock[];
    getCurrentShapeBlocks(): IBlock[];
}
