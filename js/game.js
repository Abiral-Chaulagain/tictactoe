export class game {
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
        for (let i = 0; i < this.size; i++) {
            base_array.push("0");
        }

        for (let i = 0; i < this.size; i++) {
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

        for (let i = 0; i < this.size; i++) {
            for (let j = 1; j < this.size; j++) {
                if (this.board[0][i] == this.board[j][i]) {
                    if (this.board[0][i] == "X" || this.board[0][i] == "O")
                        vertical++;
                }
            }
            //if vertical== size it is a win
            if (vertical == this.size) {
                this.winner = this.board[0][i];
                this.win = true;
                this.game_end = true;
            }
            else
                vertical = 1;
        }

        for (let i = 0; i < this.size; i++) {
            for (let j = 1; j < this.size; j++) {
                if (this.board[i][0] == this.board[i][j]) {
                    if (this.board[i][0] == "X" || this.board[i][0] == "O")
                        horizontal++;
                }
            }
            //if horizontal == size it is a win
            if (horizontal == this.size) {
                this.winner = this.board[i][0];
                this.win = true;
                this.game_end = true;
            }
            else
                horizontal = 1;
        }

        let down = 1;
        let up = 1;
        for (let i = this.size - 1; i > 0; i--) {
            if (this.board[0][0] == this.board[this.size - i][this.size - i])
                if (this.board[0][0] == "X" || this.board[0][0] == "O")
                    down++;
        }

        for (let i = 1; i < this.size; i++) {
            if (this.board[0][this.size - 1] == this.board[i][this.size - (i + 1)])
                if (this.board[0][this.size - 1] == "X" || this.board[0][this.size - 1] == "O")
                    up++;
        }

        if (down == this.size) {
            this.win = true;
            this.game_end = true;
            this.winner = this.board[0][0];
        }
        if (up == this.size) {
            this.win = true;
            this.game_end = true;
            this.winner = this.board[0][this.size - 1];
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