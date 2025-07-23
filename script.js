let grid = new Array[2, 2];
var player = false;
var winner = 0;
var game_end = false;

function swap_players() {
    //false = p1 true = p2
    player = !player;
}

function add_symbol(x, y) {
    //player 1 is X 
    if (player = false)
        symbol = "X";
    //player 2 is O
    else
        symbol = "O";
    grid(x, y) = symbol;
}

function check_winner() {

    //horizontal checks
    for (let i = 0; i <= 2; i++) {
        if (grid(0, i) == grid(1, i) == grid((2, i))) {
            winner = grid(0, i);
            is_winner = true;
            game_end = true;
        };
    }

    //horizontal checks
    for (let i = 0; i <= 2; i++) {
        if (grid(i, 0) == grid(i, 1) == grid(i, 2)) {
            winner = grid(i, 0);
            is_winner = true;
            game_end = true;
        };
    }

    //cross checks
    if (grid(0, 0) == grid(1, 1) == grid(2, 2) || grid(0, 2) == grid(1, 1) == grid(2, 0)) {
        winner = grid(1, 1);
        is_winner = true;
        game_end = true;
    }
}

function symbol_req(x, y) {
    return grid(x, y);
}

function check_game_end() {
    //set count as 0
    let c = 0;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (grid(i, j) == 0)
                //increase count if theres open space
                c++;
        }
    }
    //if count is still 0, no open space/s
    if (c == 0)
        game_end = true;
}

function reset_grid() {

    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            //set all values in array to zero
            grid(i, j) = 0;
        }
    }
    //reset to game start conditions
    winner = 0;
    is_winner = false;
    player = false;
}