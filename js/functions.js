import { board, newgame, cell_array, P1, P2, size } from "./config.js";
import { cell } from "./cell.js";
import { showpopup_player_selection, showpopup_gameend } from "./popup.js";

export function reset_game() {

    //remove the icons
    $(".tictactoe-icon").remove();

    //remove cells and dividers
    $(".tictactoe-cell").css("display", "none");
    $(".tictactoe-row-wrapper").css("display", "none");
    $(".tictactoe-column-divider").css("display", "none");
    $(".tictactoe-row-divider").css("display", "none");

    //reset player-actives
    $("#P1").removeClass("player-wrapper-active").addClass("player-wrapper");
    $("#P2").removeClass("player-wrapper-active").addClass("player-wrapper");

    reset_variables();

    showpopup_player_selection();

}

function reset_variables() {
    board.reset();
    newgame.reset();
    P1.reset();
    P2.reset();
    let temp_array = [];
    for (let i = 0; i < size.get(); i++) {
        temp_array = cell_array.c_array[i];
        for (let j = 0; j < size.get(); j++) {
            temp_array[j].reset();
        }
    }
    cell_array.c_array = [];

}

export function assign_player_symbols(starting_player) {
    if (starting_player == "P1") {
        P1.assign_symbol("X");
        P2.assign_symbol("O");
    }
    else if (starting_player == "P2") {
        P2.assign_symbol("X");
        P1.assign_symbol("O");
    }
}

export function on_select(s) {
    console.log("new board");

    board.grid(s);
    newgame.game(s);

    //initializing cells

    for (let i = 0; i < s; i++) {
        let temp_array = new Array(s);
        for (let j = 0; j < s; j++) {
            let id = 6 * (i + 1) - (6 - j);
            temp_array[j] = new cell(id);
            temp_array[j].cell_activate();
        }
        cell_array.c_array.push(temp_array);
    }
}

export function get_coor(id) {
    let x = (id % 6);
    if (x == 6)
        x = 0;
    let y = Math.floor(id / 6);
    let a = [x, y]
    return (a)
}

export function is_game_end(condition) {

    if (condition == "count") {
        showpopup_gameend("It's a draw.");
    }
    else if (condition == "win") {
        let a = newgame.get_winner();
        showpopup_gameend(a + " wins the game.");
    }
}