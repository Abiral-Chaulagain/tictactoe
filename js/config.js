import { grid } from "./grid.js";
import { game } from "./game.js";
import { player } from "./player.js";

// variables:
export let circle_icon = "icons/circle.png";
export let cross_icon = "icons/cross.png";

export const size = {
    s: 0,
    get() {
        return this.s;
    }
};

//initialize board, game and players

export const board = new grid();
export const newgame = new game();
export const P1 = new player();
export const P2 = new player();
//array to store the cells

export const cell_array = {
    c_array: []
};

export const starting_player = {
    p: "",

    get() {
        return this.p;
    }
};