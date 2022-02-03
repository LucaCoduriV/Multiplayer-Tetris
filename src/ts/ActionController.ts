import EventEmitter from "./EventEmitter";

export default class ActionController {
    onLeft = new EventEmitter<() => void>();
    onRight = new EventEmitter<() => void>();
    onUp = new EventEmitter<() => void>();
    onDown = new EventEmitter<() => void>();
    onRotateLeft = new EventEmitter<() => void>();
    onRotateRight = new EventEmitter<() => void>();

    private isDisabled = false;

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    disable(): void {
        this.isDisabled = true;
    }

    enable(): void {
        this.isDisabled = false;
    }

    private handleKeyDown(event: KeyboardEvent): void {
        if (this.isDisabled) return;
        switch (event.key) {
            case "ArrowLeft":
                this.onLeft.fire();
                break;
            case "ArrowUp":
                this.onUp.fire();
                break;
            case "ArrowRight":
                this.onRight.fire();
                break;
            case "ArrowDown":
                this.onDown.fire();
                break;
            case "q":
                this.onRotateLeft.fire();
                break;
            case "e":
                this.onRotateRight.fire();
                break;
            default:
                console.log("other key pressed:'", event.key, "'");
                break;
        }
    }
}
