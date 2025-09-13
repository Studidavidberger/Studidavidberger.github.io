// declarer les variables
const lang = document.getElementById("langues");
const minigame = document.getElementById("minigame");
const game  = document.getElementById("game");

// Lancer une partie de mini-stone
minigame.addEventListener("click", (e) => {
    if ( game.display == 'block') {
        game.display = "none";
    } else {
        game.display = "block";
    }
})