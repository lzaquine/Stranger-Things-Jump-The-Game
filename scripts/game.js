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
let score = 0;
let levels = 0;
let player;
let gravity;
let obstacles = [];
let bats = [];
let gameSpeed;
let keys = {};
let interval = null;
let isRunning = false;
let upsideDown = false;

function start() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true; 
    gameSpeed = 15;
    gravity = 0.9;
    upsideDown = false;
    player = new Player(125, 10, 50, 100);
};

function startUpsideDown() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true; 
    gameSpeed = 15;
    gravity = 0.9;
    upsideDown = true;
    player = new Player2(125, 5, 50, 100);
};

let initialSpawTimer = 220;
let spawnTimer = initialSpawTimer;

function update() {
    frames++;
    ctx.clearRect(0, 0, cWidth, cHeight);

    score = frames / 10;
    ctx.font = "20px Benguiat Bold";

    if(!upsideDown) {
    if(score < 10) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 120, 38);
    } else if(score > 10 && score < 100) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 135, 38);
    } else if(score > 100 && score < 1000) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 150, 38);
    } else if(score > 1000) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 165, 38);
    }
    if(levels === 666) {
        ctx.fillStyle = "black";
        ctx.fillRect(330, 240, 110, 50);
        ctx.fillStyle = "red";
        ctx.fillText(`HELL ${levels}`, 340, 275);
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(625, 0, 110, 35);
        ctx.fillStyle = "red";
        ctx.fillText(`Level: ${levels}`, 630, 30);

    }
    ctx.fillStyle = "red";
    ctx.fillText(`Score: ${Math.round(score)}`, 10, 30);
}

    if(upsideDown){
        if(score < 10) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 520, 115, 38);
        } else if(score > 10 && score < 100) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 520, 130, 38);
        } else if(score > 100 && score < 1000) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 520, 145, 38);
        } else if(score > 1000) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 520, 160, 38);
        }
        if(levels === 666) {
            ctx.fillStyle = "black";
            ctx.fillRect(330, 240, 110, 50);
            ctx.fillStyle = "red";
            ctx.fillText(`${levels} ˥˥ƎH`, 340, 275);
        } else {
            ctx.fillStyle = "black";
            ctx.fillRect(625, 520, 110, 35);
            ctx.fillStyle = "red";
            ctx.fillText(`-${levels} :lǝʌǝ˥`, 630, 540);
    
        }
        ctx.fillStyle = "red";
        ctx.fillText(`-${Math.round(score)} :ǝɹoɔS`, 12, 540);
    }


    spawnTimer--;
    if(spawnTimer <= 0) {
        spawnObstacle();
        spawnBats();
        spawnTimer = initialSpawTimer - gameSpeed * 5500;
        
        if (spawnTimer < 150) {
            spawnTimer = 150;
        
            if(frames > 250) {
                spawnTimer = 125;
                levels = 1
            } 
            if(frames > 500) {
                spawnTimer = 100;
                levels = 2
                spawnNextBat();
            }
            if(frames > 1000) {
                spawnTimer = 90
                levels = 3
            }
            if(frames > 1500) {
                spawnTimer = 80
                levels = 4
            }
            if(frames > 2000) {
                spawnTimer = 70
                levels = 5
            } 
            if(frames > 2500) {
                spawnTimer = 60;
                levels = 6
            }
            if(frames > 3000) {
                spawnTimer = 55;
                levels = 7
            }
            if(frames > 5000) {
                spawnTimer = 50;
                levels = 8
            }
            if(frames > 6666) {
                spawnTimer = 45;
                levels = 666
            }
            if(frames > 9999) {
                spawnTimer = 40;
                levels = 999
            }
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
          spawnTimer = initialSpawTimer;
          frames = 0;
          levels = 0;
          gameSpeed = 15;
          canvas.classList.toggle('hidden')
          canvas.classList.remove('first-background')
          canvas.classList.remove('second-background')
          gameOverScreen.classList.toggle('hidden')
          bgTVScreen.classList.toggle('hidden')
        };

        demon.update();
    };

    for (let i = 0; i < bats.length; i++) {
        let bat = bats[i];
        if (bat.x + bat.width < 0) {
            bats.splice(i, 1);
        };

        if (player.colision(bat)) {
          bats = [];
          clearInterval(interval);
          isRunning = false;
          spawnTimer = initialSpawTimer;
          frames = 0;
          levels = 0;
          gameSpeed = 15;
          canvas.classList.toggle('hidden')
          canvas.classList.remove('first-background')
          canvas.classList.remove('second-background')
          gameOverScreen.classList.toggle('hidden')
          bgTVScreen.classList.toggle('hidden')
        };
        
        bat.update();
    };

    canvas.addEventListener('touchstart', function(event) {
        player.jump();
      });

    player.animate();
    player.playerDraw(frames)
    gameSpeed += 0.010;
    console.log(obstacles)
    console.log(frames)
    console.log(spawnTimer)
    console.log(levels)

};

let song = new Audio('./docs/assets/sounds/som_1.mp3');
song.loop = true;