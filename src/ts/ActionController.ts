import EventEmitter from "./EventEmitter";

export default class ActionController {
    onLeft: EventEmitter<() => void>;
    onRight: EventEmitter<() => void>;
    onUp: EventEmitter<() => void>;
    onDown: EventEmitter<() => void>;

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 37:
                console.log("left");
                this.onLeft.fire();
                break;
            case 38:
                console.log("up");
                this.onUp.fire();
                break;
            case 39:
                console.log("right");
                this.onRight.fire();
                break;
            case 40:
                console.log("down");
                this.onDown.fire();
                break;
            default:
                console.log("other key pressed");
                break;
        }
    }
}
