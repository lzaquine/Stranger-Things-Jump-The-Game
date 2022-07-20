let game;
let gameUpsideDown;
const upsideDownBtn = document.getElementById("upside-down");
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    if (!game) {
    startBtn.addEventListener("click", start());
    game.start();
} else if (!gameUpsideDown) {
    upsideDownBtn.addEventListener("click", startUpsideDown());
}
});