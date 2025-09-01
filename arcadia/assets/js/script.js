// do nothing
console.log("test")

// PALETTE DE COULEURS
const btn_palette = document.getElementById("btn_palette");
const pal  = document.getElementById("pal");

btn_palette.addEventListener("click", (e) => {
    if ( pal.display ) {
        pal.display = "none";
    } else {
        pal.display = "block";
    }
})

// MINI JEU
const minigame = document.getElementById("minigame");
const game  = document.getElementById("game");

minigame.addEventListener("click", (e) => {
    if ( game.display ) {
        game.display = "none";
    } else {
        game.display = "block";
    }
})