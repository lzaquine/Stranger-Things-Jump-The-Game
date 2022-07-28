const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let images;


    images = [
        "./docs/assets/images/player_frames_img/img_player_1_top.png",
        "./docs/assets/images/player_frames_img/img_player_2_top.png",
        "./docs/assets/images/player_frames_img/img_player_3_top.png",
        "./docs/assets/images/player_frames_img/img_player_4_top.png",
        "./docs/assets/images/player_frames_img/img_player_5_top.png",
        "./docs/assets/images/player_frames_img/img_player_6_top.png",
        "./docs/assets/images/player_frames_img/img_player_7_top.png",
        "./docs/assets/images/player_frames_img/img_player_8_top.png",
      ]


const titleScreen = document.getElementById('title-screen');
const levelsScreen = document.getElementById('levels');
const gameOverScreen = document.getElementById('game-over-screen');
const bgTVScreen = document.getElementById('bk-tv');
const titleButton = document.getElementById('title-button');
const restartButton = document.getElementById('restart-button');
const normalButton = document.getElementById('btn-normal');
const upsideDownButton = document.getElementById('btn-upsideDown');

titleButton.onclick = () => {
    song.play();
    titleScreen.classList.toggle('hidden');
    levelsScreen.classList.toggle('hidden');
};

normalButton.onclick = () => {
    levelsScreen.classList.toggle('hidden');
    canvas.classList.toggle('hidden');
    canvas.classList.toggle('first-background');
    bgTVScreen.classList.toggle('hidden');
    start();
};
upsideDownButton.onclick = () => {
    levelsScreen.classList.toggle('hidden');
    canvas.classList.toggle('hidden');
    canvas.classList.toggle('second-background');
    bgTVScreen.classList.toggle('hidden');
    startUpsideDown();
};

restartButton.onclick = () => {
    gameOverScreen.classList.toggle('hidden');
    titleScreen.classList.toggle('hidden');
};

const cWidth = canvas.width;
const cHeight = canvas.height;
 
let frames = 0;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
let interval = null;
let isRunning = false;

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

let initialSpawTimer = 180;
let spawnTimer = initialSpawTimer;

function update() {
    frames++;
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

        demon.update();
    };

    player.animate();
    player.playerDraw(frames)
    gameSpeed += 0.010;
};

let song = new Audio('./docs/assets/sounds/som_1.mp3');
song.loop = true;