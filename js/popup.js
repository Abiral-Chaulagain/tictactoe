//popup for game end
export function showpopup_gameend(message) {
    $(".popup-msg[id=gameend]").text(message);
    $(".popup-overlay").fadeIn();
    $(".popup[id=gameend]").fadeIn();
}

//popup for alerting that the slot is already filled
export function showpopup_slotfilled() {
    $(".popup-overlay").fadeIn();
    $(".popup[id=slotfilled]").fadeIn();
}

//popup for selecting size of the board
export function showpopup_gridsize() {
    $(".popup-overlay").fadeIn();
    $(".popup[id=gridsize]").fadeIn();
}

//popup for selecting which player goes 1st. 1st player is always X
export function showpopup_player_selection() {
    $(".popup-overlay").fadeIn();
    $(".popup[id = player").fadeIn();
}
