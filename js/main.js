import { board, newgame, P1, P2, cell_array, circle_icon, cross_icon, starting_player, size } from "./config.js";
import { on_select, assign_player_symbols, reset_game, get_coor, is_game_end } from "./functions.js";
import { showpopup_gridsize, showpopup_player_selection, showpopup_slotfilled } from "./popup.js";

//for closing gameend popup
$(".popup-btn[id = gameend]").click(function () {
    $(".popup, .popup-overlay").fadeOut();
    reset_game();
})

//for closing slotfilled popup
$(".popup-btn[id = slotfilled]").click(function () {
    $(".popup, .popup-overlay").fadeOut();
})

//on select size
$(".popup-size-btn").click(function () {
    size.s = $(this).attr("id");
    $(".popup, .popup-overlay").fadeOut();
    console.log("on select")
    on_select(size.s);
});

//on select player
$(".popup-player-btn").click(function () {
    starting_player.p = $(this).attr("id");
    //change the current_player in newgame obj
    newgame.starter(starting_player.get());
    //assign players symbols
    assign_player_symbols(starting_player.get());
    $(".popup, .popup-overlay").fadeOut();
    showpopup_gridsize();
})

//cell click
$(".tictactoe-cell").on("click", function () {
    let id = $(this).attr("id");
    //get coor for cell_array
    let a = get_coor(id);
    let y = a[0];
    let x = a[1];
    let s = "";

    let current_player = newgame.get_player();
    if (cell_array.c_array[x][y].occupied == false) {
        if (current_player == "P1") {
            s = P1.req_symbol();
        }
        else if (current_player = "P2") {
            s = P2.req_symbol();
        }

        //add into objs: cell and board.game
        cell_array.c_array[x][y].add_symbol(s);


        newgame.add_into_board(x, y, s);

        if (newgame.check_winner() == true) {
            is_game_end("win");
        }

        if (newgame.check_slots() == true) {
            is_game_end("count");
        }
        newgame.swap_player();
    }
    else {
        showpopup_slotfilled();
        return;
    }
})

//hover cell
$(".tictactoe-cell").on("mouseenter", function () {

    //hoverin
    let cell_id = $(this).attr("id");
    let a = get_coor(cell_id);
    let x = a[0];
    let y = a[1];
    let symbol = "";

    //get current player
    let cur_player = newgame.get_player();
    if (cur_player == "P1")
        symbol = P1.req_symbol();
    else if (cur_player == "P2")
        symbol = P2.req_symbol();
    else
        console.log("error")

    console.log(symbol)
    //check if cell empty
    if (cell_array.c_array[y][x].get_occupation() == false) {
        if (symbol == "X")
            $(".tictactoe-cell[id=" + cell_id + "]").append("<img class= tictactoe-icon-hover id = " + cell_id + " src=" + cross_icon + " />");
        if (symbol == "O")
            $(".tictactoe-cell[id=" + cell_id + "]").append("<img class= tictactoe-icon-hover id = " + cell_id + " src=" + circle_icon + " />");

    }
}

).on("mouseleave", function () {
    let cell_id = $(this).attr("id");
    //hoverout
    $(".tictactoe-icon-hover[id=" + cell_id + "]").remove();

})

//click reset button
$(".reset").on("click", reset_game());

$(function () {
    console.log("ready");
    showpopup_player_selection();
    board.grid();
})
