import LShape from "./core/tetrominoes/LShape";
import Ticker from "./core/Ticker";
import ActionController from "./ActionController";
import { Vector } from "vector2d";

const c = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

class App {
    constructor() {
        requestAnimationFrame(this.render);
    }

    render(tFrame: number) {
        requestAnimationFrame(this.render);
    }

    update() {}
}

const shape = new LShape(new Vector(0, 0));

console.log(shape.blocks);
shape.moveDown();
console.log(shape.blocks);
shape.moveUp();
console.log(shape.blocks);