import { circle_icon, cross_icon } from "./config.js";
export class cell {
    constructor(index) {
        this.id = index;
        this.value = "";
        this.occupied = false;
    }

    cell_activate() {
        $(".tictactoe-cell[id=" + this.id + "]").css("display", "flex");
    }

    get_id() {
        return this.id;
    }

    occupy() {
        this.occupied = true;
    }

    add_into_grid() {
        if (this.value == "X") {
            $(".tictactoe-cell[id=" + this.id + "]").append("<img class= tictactoe-icon id = " + this.id + " src=" + cross_icon + " />");
        }
        else if (this.value == "O") {
            $(".tictactoe-cell[id=" + this.id + "]").append("<img class= tictactoe-icon id = " + this.id + " src=" + circle_icon + " />");
        }
    }

    add_symbol(sym) {
        this.value = sym;
        this.occupy();
        this.add_into_grid();
    }

    get_value() {
        return this.value;
    }

    get_occupation() {
        return this.occupied;
    }
    change_occupation() {
        this.occupied = !this.occupied;
    }

    reset() {
        this.id = null;
        this.value = "";
        this.occupied = false;
    }
}