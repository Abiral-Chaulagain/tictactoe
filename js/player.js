export class player {
    constructor() {
        this.symbol = "";
        this.winner = false;
    }

    assign_symbol(sym) {
        this.symbol = sym;
    }
    req_symbol() {
        return this.symbol;
    }

    win() {
        winner = true;
    }

    reset() {
        this.symbol = "";
        this.winner = false;
    }
}
