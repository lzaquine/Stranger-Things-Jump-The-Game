const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;


let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};

function start() {
    gameSpeed = 15;
    gravity = 0.9;
    player = new Player(125, 400, 50, 50, 'black');
    requestAnimationFrame(update);
}

let initialSpawTimer = 100;
let spawnTimer = initialSpawTimer;

function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, cWidth, cHeight);

    spawnTimer--;
    if(spawnTimer <= 0) {
        spawnObstacle();
        spawnTimer = initialSpawTimer - gameSpeed * 25;

        if (spawnTimer < 60) {
            spawnTimer = 60;
        }
    }

    for (let i = 0; i < obstacles.length; i++) {
        let demon = obstacles[i];
        if (demon.x + demon.width < 0) {
            obstacles.splice(i, 1);
        }

        if (player.x < demon.x + demon.width &&
            player.x + player.width > demon.x &&
            player.y < demon.y + demon.height &&
            player.y + player.height > demon.y) {
                obstacles = [];
                spawnTimer = initialSpawTimer;
                gameSpeed = 15;
        }
        demon.update();
    }

    player.animate();

    gameSpeed += 0.005;
}

start();