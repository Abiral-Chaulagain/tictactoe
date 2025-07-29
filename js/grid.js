export class grid {
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
                $(this).css("display", "flex");
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