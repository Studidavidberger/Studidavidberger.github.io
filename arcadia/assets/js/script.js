// declarer les variables
const set = document.getElementById("set")
const settings = document.getElementById("settings")
const minigame = document.getElementById("minigame");
const game  = document.getElementById("game");

// Lancer une partie de mini-stone
minigame.addEventListener("click", (e) => {
    if ( game.display ) {
        game.display = "none";
    } else {
        game.display = "block";
    }
})