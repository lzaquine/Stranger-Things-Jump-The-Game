const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;
    

let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
let interval = null;
let isRunning = false;
let frames = 0;


function start() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true; // false pra comecar o jogo
    gameSpeed = 15;
    gravity = 0.9;
    player = new Player(125, 10, 50, 50, 'black');
    player2 = new Player2(125, 0, 50, 50, 'black');
    /* requestAnimationFrame(update); */
};

/* function reset() {
    clearInterval(interval);
    player.x = x;
    player.y = y;
    obstacles = [];
    spawnTimer = initialSpawTimer;
    gameSpeed = 15;
} */

let initialSpawTimer = 100;
let spawnTimer = initialSpawTimer;

function update() {
    /* let requestID = requestAnimationFrame(update); */
    ctx.clearRect(0, 0, cWidth, cHeight);

    spawnTimer--;
    if(spawnTimer <= 0) {
        spawnObstacle();
        spawnObstacle2();
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

        if (player.x + player.width >= demon.x &&
            !(demon.x + demon.width <= player.x) &&
            player.y + player.height >= demon.y) {
                obstacles = [];
                clearInterval(interval);
                isRunning = false;
                spawnTimer = initialSpawTimer;
                gameSpeed = 15;
        }
        // quando passa pelo x e do width do player, mas pertinho, ainda acaba o jogo com a posicao do demon mais pra tras
        

        demon.update();
    }

    player.animate();
    player2.animate();

    gameSpeed += 0.005;

};
start();

//

// classe e funcao diferenca


// criar funcao reset com tudo 0 pra colocar dentro do start ou stop dai aperto o botao e vai