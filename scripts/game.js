const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//screens
const titleScreen = document.getElementById('title-screen');
const levelsScreen = document.getElementById('levels');
const gameOverScreen = document.getElementById('game-over-screen')
const bgTVScreen = document.getElementById('bk-tv')
const titleButton = document.getElementById('title-button');
const restartButton = document.getElementById('restart-button');
const normalButton = document.getElementById('btn-normal');
const upsideDownButton = document.getElementById('btn-upsideDown');

titleButton.onclick = () => {
    titleScreen.classList.toggle('hidden')
    levelsScreen.classList.toggle('hidden')
}

normalButton.onclick = () => {
    levelsScreen.classList.toggle('hidden')
    canvas.classList.toggle('hidden')
    canvas.classList.toggle('first-background')
    bgTVScreen.classList.toggle('hidden')
    start()
}
upsideDownButton.onclick = () => {
    levelsScreen.classList.toggle('hidden')
    canvas.classList.toggle('hidden')
    canvas.classList.toggle('second-background')
    bgTVScreen.classList.toggle('hidden')
    /* backgroundImg = backgroundImg(); */

    startUpsideDown()
} 

restartButton.onclick = () => {
    gameOverScreen.classList.toggle('hidden')
    titleScreen.classList.toggle('hidden')
}

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
    isRunning = true; 
    gameSpeed = 15;
    gravity = 0.9;
    player = new Player(125, 10, 50, 100);
};

function startUpsideDown() {
    
    interval = setInterval(update, 1000 / 60);
    isRunning = true; 
    gameSpeed = 15;
    gravity = 0.9;
    player = new Player2(125, 5, 50, 100);
};

let initialSpawTimer =200;
let spawnTimer = initialSpawTimer;

function update() {
    ctx.clearRect(0, 0, cWidth, cHeight);

    spawnTimer--;
    if(spawnTimer <= 0) {
       spawnObstacle();
        spawnTimer = initialSpawTimer - gameSpeed * 5500;

        if (spawnTimer < 60) {
            spawnTimer = 60;
        };
    };


    for (let i = 0; i < obstacles.length; i++) {
        let demon = obstacles[i];
        if (demon.x + demon.width < 0) {
            obstacles.splice(i, 1);
        };

        if (player.colision(demon)) {
          obstacles = [];
          clearInterval(interval);
          isRunning = false;
          spawnTimer;
          gameSpeed = 15;
          canvas.classList.toggle('hidden')
          canvas.classList.remove('first-background')
          canvas.classList.remove('second-background')
          gameOverScreen.classList.toggle('hidden')
          bgTVScreen.classList.toggle('hidden')

        };
        // quando passa pelo x e do width do player, mas pertinho, ainda acaba o jogo com a posicao do demon mais pra tras
        

        demon.update();
    };

    player.animate();

    gameSpeed += 0.005;

};


// bonus-> criar uma outra classe de demons, so que puxando aquela mesma e usar mais um loop pra criar os demons