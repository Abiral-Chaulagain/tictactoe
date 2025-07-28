class grid {
    constructor() {
        this.size = null;
        this.stop = false;
    }

    grid(gridsize) {
        this.size = gridsize;

        //for column wrappers
        for (let i = 0; i < this.size; i++) {
            $(".tictactoe-row-wrapper[id=" + i + "]").toggle(function () {
                //change css attribute to flex
                $(this).css("display", "flex")
            });
        }
        for (let i = 0; i < (this.size - 1); i++) {
            $(".tictactoe-column-divider[id=" + i + "]").toggle();
            $(".tictactoe-row-divider[id=" + i + "]").toggle();
        }
    }
    game_stop() {
        this.stop = true;
    }
    reset() {
        this.size = null;
        this.stop = false;
    }
}

class game {
    constructor() {
        this.size = null;
        this.board = []
        this.game_end = false;
        this.win = false;
        this.winner = "";
        this.count = null;
        this.current_player = "";
    }

    starter(starting_player) {
        this.current_player = starting_player
    }

    game(s) {
        this.size = s;
        this.count = s * s;

        //make a base board with "0" in all cells

        let base_array = [];
        for (let i = 0; i < size; i++) {
            base_array.push("0");
        }

        for (let i = 0; i < size; i++) {
            this.board.push(base_array);
        }

        //make the starting players div active
        $("div[id=" + this.current_player + "]").toggleClass("player-wrapper-active player-active")
    }

    assign_symbols() {
        return this.current_player;
    }

    get_game_end() {
        return this.game_end;
    }

    swap_player() {
        if (this.current_player == "P1")
            this.current_player = "P2";

        else
            this.current_player = "P1";

        //swap the active and non active player divs
        $("div[id=P1]").toggleClass("player-wrapper-active player-active")
        $("div[id=P2]").toggleClass("player-wrapper-active player-active")
    }

    get_player() {
        return this.current_player
    }

    reduce_count() {
        count--;
    }

    add_into_board(x, y, s) {
        let temp = Array.from(this.board[x]);
        temp[y] = s;
        this.board[x] = temp;
        this.reduce_count;
        this.swap_player;
    }

    get_winner() {
        return this.winner;
    }

    check_winner() {

        let horizontal = 1;
        let vertical = 1;

        for (let i = 0; i < size; i++) {
            for (let j = 1; j < size; j++) {
                if (this.board[0][i] == this.board[j][i]) {
                    if (this.board[0][i] == "X" || this.board[0][i] == "O")
                        vertical++;
                }
            }
            //if vertical== size it is a win
            if (vertical == size) {
                this.winner = this.board[0][i];
                this.win = true;
                this.game_end = true;
            }
            else
                vertical = 1;
        }

        for (let i = 0; i < size; i++) {
            for (let j = 1; j < size; j++) {
                if (this.board[i][0] == this.board[i][j]) {
                    if (this.board[i][0] == "X" || this.board[i][0] == "O")
                        horizontal++;
                }
            }
            //if horizontal == size it is a win
            if (horizontal == size) {
                this.winner = this.board[i][0];
                this.win = true;
                this.game_end = true;
            }
            else
                horizontal = 1;
        }

        let down = 1;
        let up = 1;
        for (let i = size - 1; i > 0; i--) {
            if (this.board[0][0] == this.board[size - i][size - i])
                if (this.board[0][0] == "X" || this.board[0][0] == "O")
                    down++;
        }

        for (let i = 1; i < size; i++) {
            if (this.board[0][size - 1] == this.board[i][size - (i + 1)])
                if (this.board[0][size - 1] == "X" || this.board[0][size - 1] == "O")
                    up++;
        }

        if (down == size) {
            this.win = true;
            this.game_end = true;
            this.winner = this.board[0][0];
        }
        if (up == size) {
            this.win = true;
            this.game_end = true;
            this.winner = this.board[0][size - 1];
        }

        if (this.win == true)
            return true;

    }

    check_slots() {
        if (this.count == 0)
            return true;
    }

    reset() {
        this.size = null;
        this.board = []
        this.game_end = false;
        this.win = false;
        this.winner = "";
        this.count = null;
        this.current_player = "";
    }
}

class cell {
    constructor(index) {
        this.id = index;
        this.value = "";
        this.occupied = false;
    }

    cell_activate() {
        $(".tictactoe-cell[id=" + id + "]").css("display", "flex");
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

class player {
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


function reset_game() {

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
    for (let i = 0; i < size; i++) {
        temp_array = cell_array[i];
        for (let j = 0; j < size; j++) {
            temp_array[j].reset();
        }
    }
    cell_array = [];

}

//popup for game end message
function showpopup_gameend(message) {
    $(".popup-msg[id=gameend]").text(message);
    $(".popup-overlay").fadeIn();
    $(".popup[id=gameend]").fadeIn();
}
$(".popup-btn[id = gameend]").click(function () {
    $(".popup, .popup-overlay").fadeOut();
    reset_game();
})

//popup for alerting that the slot is already filled
function showpopup_slotfilled() {
    $(".popup-overlay").fadeIn();
    $(".popup[id=slotfilled]").fadeIn();
}

$(".popup-btn[id = slotfilled]").click(function () {
    $(".popup, .popup-overlay").fadeOut();
})

//popup for selecting size of the board
function showpopup_gridsize() {
    $(".popup-overlay").fadeIn();
    $(".popup[id=gridsize]").fadeIn();
}
$(".popup-size-btn").click(function () {
    size = $(this).attr("id");
    $(".popup, .popup-overlay").fadeOut();
    on_select(size);
});

//popup for selecting which player goes 1st. 1st player is always X
function showpopup_player_selection() {
    $(".popup-overlay").fadeIn();
    $(".popup[id = player").fadeIn();
}


$(".popup-player-btn").click(function () {
    starting_player = $(this).attr("id");
    //change the current_player in newgame obj
    newgame.starter(starting_player);
    //assign players symbols
    assign_player_symbols(starting_player);
    $(".popup, .popup-overlay").fadeOut();
    showpopup_gridsize();
})

function assign_player_symbols(starting_player) {
    if (starting_player == "P1") {
        P1.assign_symbol("X");
        P2.assign_symbol("O");
    }
    else if (starting_player == "P2") {
        P2.assign_symbol("X");
        P1.assign_symbol("O");
    }
}

function on_select(size) {
    board.grid(size);
    newgame.game(size);

    //initializing cells

    for (let i = 0; i < size; i++) {
        let temp_array = new Array(size);
        for (let j = 0; j < size; j++) {
            id = 6 * (i + 1) - (6 - j);
            temp_array[j] = new cell(id);
            temp_array[j].cell_activate();
        }
        cell_array.push(temp_array);
    }
}

function get_coor(id) {
    x = (id % 6);
    if (x == 6)
        x = 0;
    y = Math.floor(id / 6);
    a = [x, y]
    return (a)
}

$(".tictactoe-cell").on("click", function () {
    id = $(this).attr("id");

    //get coor for cell_array 
    a = get_coor(id);
    y = a[0];
    x = a[1];

    current_player = newgame.get_player();
    if (cell_array[x][y].occupied == false) {
        if (current_player == "P1") {
            s = P1.req_symbol();
        }
        else if (current_player = "P2") {
            s = P2.req_symbol();
        }
        else
            console.log("player selection error")

        //add into objs: cell and board.game
        cell_array[x][y].add_symbol(s);


        newgame.add_into_board(x, y, s);

        if (newgame.check_winner() == true)
            is_game_end("win");

        if (newgame.check_slots() == true)
            is_game_end("count");
        newgame.swap_player();
    }
    else {
        showpopup_slotfilled();
        return;
    }
})

function is_game_end(condition) {

    if (condition == "count") {
        showpopup_gameend("It's a draw.");
    }
    else if (condition == "win") {
        a = newgame.get_winner();
        showpopup_gameend(a + " wins the game.");
    }
}



$(".tictactoe-cell").on("mouseenter", function () {

    //hoverin
    cell_id = $(this).attr("id");
    a = get_coor(cell_id);
    x = a[0];
    y = a[1];
    symbol = "";

    //get current player
    cur_player = newgame.get_player();
    if (cur_player == "P1")
        symbol = P1.req_symbol();
    else if (cur_player == "P2")
        symbol = P2.req_symbol();
    else
        console.log("error")

    console.log(symbol)
    //check if cell empty
    if (cell_array[y][x].get_occupation() == false) {
        if (symbol == "X")
            $(".tictactoe-cell[id=" + cell_id + "]").append("<img class= tictactoe-icon-hover id = " + cell_id + " src=" + cross_icon + " />");
        if (symbol == "O")
            $(".tictactoe-cell[id=" + cell_id + "]").append("<img class= tictactoe-icon-hover id = " + cell_id + " src=" + circle_icon + " />");

    }
}

).on("mouseleave", function () {
    //hoverout
    $(".tictactoe-icon-hover[id=" + cell_id + "]").remove();

})

$(".reset").on("click", reset_game)


//global variables
circle_icon = "icons/circle.png";
cross_icon = "icons/cross.png";

size = 0;

//initialize board, game and players

const board = new grid();
const newgame = new game();
const P1 = new player();
const P2 = new player();
//array to store the cells
cell_array = [];

board.grid();


$(function () {
    console.log("ready");
    showpopup_player_selection();
})