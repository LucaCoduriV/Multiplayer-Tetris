import EventEmitter from "./EventEmitter";

export default class ActionController {
    onLeft = new EventEmitter<() => void>();
    onRight = new EventEmitter<() => void>();
    onUp = new EventEmitter<() => void>();
    onDown = new EventEmitter<() => void>();

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case "ArrowLeft":
                console.log("left");
                this.onLeft.fire();
                break;
            case "ArrowUp":
                console.log("up");
                this.onUp.fire();
                break;
            case "ArrowRight":
                console.log("right");
                this.onRight.fire();
                break;
            case "ArrowDown":
                console.log("down");
                this.onDown.fire();
                break;
            default:
                console.log("other key pressed");
                break;
        }
    }
}