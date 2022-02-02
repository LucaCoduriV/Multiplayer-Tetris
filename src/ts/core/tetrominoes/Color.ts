export default class Color {
    static readonly RED: Color = new Color("#FF0000");
    static readonly GREEN: Color = new Color("#00FF00");
    static readonly BLUE: Color = new Color("#0000FF");
    static readonly YELLOW: Color = new Color("#FFFF00");
    static readonly PURPLE: Color = new Color("#FF00FF");
    static readonly CYAN: Color = new Color("#00FFFF");
    static readonly ORANGE: Color = new Color("#FF7F00");
    static readonly PINK: Color = new Color("#FF007F");
    static readonly GREY: Color = new Color("#808080");

    color = "";

    constructor(value: string) {
        this.color = value;
    }

    toString(): string {
        return this.color;
    }
}
