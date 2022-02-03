import { Vector } from "vector2d";
import JShape from "./tetrominoes/JShape";
import LShape from "./tetrominoes/LShape";
import Shape from "./tetrominoes/Shape";
import SShape from "./tetrominoes/SShape";
import TShape from "./tetrominoes/TShape";
import ZShape from "./tetrominoes/ZShape";
import IShape from "./tetrominoes/IShape";
import OShape from "./tetrominoes/OShape";
import Block from "./tetrominoes/Block";

export default class Board {
    private _inactiveBlocks: Block[] = [];
    private _width: number;
    private _height: number;
    private _speed: number;
    private _activeShape: Shape | null;

    constructor(width: number, height: number, speed: number) {
        this._width = width;
        this._height = height;
        this._speed = speed;
    }

    get activeShape(): Shape {
        return this._activeShape;
    }

    get inactiveBlocks(): Block[] {
        return this._inactiveBlocks;
    }

    clear(): void {
        this._inactiveBlocks = [];
        this._activeShape = null;
    }

    /**
     * Permet de trouver les lignes complètes.
     * @returns un tableau contenant les numéros de lignes complètes.
     */
    checkLineCompletion(): number[] {
        const blocks = this._inactiveBlocks;
        let lines = Array.from({ length: this._height }, (v, i) => 0);

        for (let i = 0; i < blocks.length; i++) {
            lines[blocks[i].position.y]++;
        }
        return lines.map((line, index) => (line > 10 ? index : -1)).filter((line) => line != -1);
    }

    /**
     * Permet de supprimer une ligne du jeu.
     * @param line le numéro de la ligne à supprimer.
     */
    removeLine(line: number) {
        const blocks = this._inactiveBlocks;
        const newArray: Block[] = [];
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].position.y != line) {
                newArray.push(blocks[i]);
            }
        }
        this._inactiveBlocks = newArray;
    }

    pullBlocksDown(higherThan: number): void {
        const blocks = this._inactiveBlocks;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].position.y < higherThan) {
                blocks[i].position.y++;
            }
        }
    }

    /**
     * Permet de désactiver la forme active.
     */
    disableActiveShape(): void {
        this._inactiveBlocks.push(...this._activeShape.blocks);
        this._activeShape = null;
    }

    checkCollision(): boolean {
        if (!this._activeShape) return false;

        const inactiveBlocks = this._inactiveBlocks;
        const activeBlocks = this._activeShape.blocks;

        for (let i = 0; i < inactiveBlocks.length; i++) {
            for (let j = 0; j < activeBlocks.length; j++) {
                if (inactiveBlocks[i].position.equals(activeBlocks[j].position)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Permet de savoir si les blocs se trouvent tout en haut.
     * @returns vrai si des blocs se trouvent tout en haut.
     */
    isOverflowing(): boolean {
        const blocks = this._inactiveBlocks;

        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].position.y == 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Permet de savoir si la forme active est en dehors de la grille.
     * @returns vrai si la forme se trouve en dehors de la grille.
     */
    checkOutOfBounds(): boolean {
        if (!this._activeShape) return false;
        const blocks = this._activeShape.blocks;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].position.x < 0 || blocks[i].position.x > this._width) {
                return true;
            }
            if (blocks[i].position.y >= this._height) {
                return true;
            }
        }
    }

    addShape(shape: Shape): void {
        this._activeShape = shape;
    }

    addRandomShape(): Shape {
        const shapes = ["L", "Z", "T", "S", "J", "I", "O"];
        const rotation = Math.floor(Math.random() * 4);
        // TODO prendre en compte la taille de la pièce pour pas que ça puisse spawn en dehors de la grille.
        const xPos = Math.floor(Math.random() * 7);
        switch (shapes[Math.floor(Math.random() * shapes.length)]) {
            case "L":
                this._activeShape = new LShape(new Vector(xPos, -2), rotation);
                break;
            case "Z":
                this._activeShape = new ZShape(new Vector(xPos, -2), rotation);
                break;
            case "T":
                this._activeShape = new TShape(new Vector(xPos, -2), rotation);
                break;
            case "S":
                this._activeShape = new SShape(new Vector(xPos, -2), rotation);
                break;
            case "J":
                this._activeShape = new JShape(new Vector(xPos, -2), rotation);
                break;
            case "I":
                this._activeShape = new IShape(new Vector(xPos, -2), rotation);
                break;
            case "O":
                this._activeShape = new OShape(new Vector(xPos, -2));
                break;
            default:
                throw new Error("Invalid shape");
        }

        this._activeShape = this._activeShape;
        return this._activeShape;
    }
}
