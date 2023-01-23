const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const titleScreen = document.getElementById('title-screen');
const levelsScreen = document.getElementById('levels');
const playerScreen = document.getElementById('pickPlayer');
const gameOverScreen = document.getElementById('game-over-screen');
const bgTVScreen = document.getElementById('bk-tv');
const titleButton = document.getElementById('title-button');
const restartButton = document.getElementById('restart-button');
const normalButton = document.getElementById('btn-normal');
const upsideDownButton = document.getElementById('btn-upsideDown');
const hopperButton = document.getElementById('btn-hopper');
const dustinButton = document.getElementById('btn-dustin');
let upsideDown = false;

titleButton.onclick = () => {
    song.play();
    titleScreen.classList.toggle('hidden');
    levelsScreen.classList.toggle('hidden');
};

normalButton.onclick = () => {
    levelsScreen.classList.toggle('hidden');
    playerScreen.classList.toggle('hidden');
    upsideDown = false;
};
upsideDownButton.onclick = () => {
    levelsScreen.classList.toggle('hidden');
    playerScreen.classList.toggle('hidden');
    upsideDown = true;
};
hopperButton.onclick = () => {
    if(!upsideDown) {
        playerScreen.classList.toggle('hidden');
    canvas.classList.toggle('hidden');
    canvas.classList.toggle('first-background');
    bgTVScreen.classList.toggle('hidden');
    start();
    } 
    if(upsideDown) {
        playerScreen.classList.toggle('hidden');
        canvas.classList.toggle('hidden');
        canvas.classList.toggle('second-background');
        bgTVScreen.classList.toggle('hidden');
        startUpsideDown();
    }
}
dustinButton.onclick = () => {
    if(!upsideDown) {
    playerScreen.classList.toggle('hidden');
    canvas.classList.toggle('hidden');
    canvas.classList.toggle('first-background');
    bgTVScreen.classList.toggle('hidden');
    startDustin();
    } 
    if(upsideDown) {
        playerScreen.classList.toggle('hidden');
        canvas.classList.toggle('hidden');
        canvas.classList.toggle('second-background');
        bgTVScreen.classList.toggle('hidden');
        startUpsideDownDustin();
    }
}
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
let slimes = [];
let dogs = [];
let demogorgons = [];
let gameSpeed;
let keys = {};
let interval = null;
let isRunning = false;
let spawnObst = false;
let spawnSlim = false;
let spawnDog = false;
let spawnDemon = false;
let spawn2Bat = false;


function start() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true;
    gameSpeed = 15;
    gravity = 0.9;
    upsideDown = false;
    player = new Player(125, 10, 50, 100);
};

function startDustin() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true;
    gameSpeed = 15;
    gravity = 0.9;
    upsideDown = false;
    player = new Dustin(125, 10, 60, 90);
}

function startUpsideDownDustin() {
    interval = setInterval(update, 1000 / 60);
    isRunning = true; 
    gameSpeed = 15;
    gravity = 0.9;
    upsideDown = true;
    player = new Dustin2(125, 5, 60, 90);
}

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

    /* Highscore */
    let highScore1 = localStorage.getItem("highScore1");
    let highScore2 = localStorage.getItem("highScore2");
    let highScore3 = localStorage.getItem("highScore3");

    let highLevel1 = localStorage.getItem("highLevel1");
    let highLevel2 = localStorage.getItem("highLevel2");
    let highLevel3 = localStorage.getItem("highLevel3");

    
    let highScoreElement1 = document.getElementById("highScore1");
    let highScoreElement2 = document.getElementById("highScore2");
    let highScoreElement3 = document.getElementById("highScore3");

    
    highScoreElement1.innerHTML = Math.round(highScore1) + " on level " + highLevel1;
    highScoreElement2.innerHTML = Math.round(highScore2) + " on level " + highLevel2;
    highScoreElement3.innerHTML = Math.round(highScore3) + " on level " + highLevel3;

    if(score > highScore1) {
        localStorage.setItem("highScore1", score);
        if(levels > highLevel1) {
            localStorage.setItem("highLevel1", levels);
          } 
      } else if(score > highScore2) {
        localStorage.setItem("highScore2", score);
        if(levels > highLevel2) {
            localStorage.setItem("highLevel2", levels);
          } 
      } else if(score > highScore3) {
        localStorage.setItem("highScore3", score);
        if(levels > highLevel3) {
            localStorage.setItem("highLevel3", levels);
          }
      }


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
        ctx.fillRect(330, 240, 110, 55);
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
            ctx.fillRect(330, 240, 110, 55);
            ctx.fillStyle = "red";
            ctx.fillText(`-${levels} ˥˥ƎH`, 340, 275);
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
        if(spawnObst) {
            spawnObstacle();
        }
        if(spawnSlim) {
            spawnSlimes();
        }
        if(spawnDog) {
            spawnDogs();
        }
        if(spawnDemon) {
            spawnDemogorgon();
        }
        if(spawn2Bat) {
            spawnNextBat();
        }
        spawnBats();
        spawnTimer = initialSpawTimer - gameSpeed * 5500;
        
        if (spawnTimer < 150) {
            spawnDemon = true;
            spawnTimer = 150;
            
            if(frames > 250) {
                spawnTimer = 125;
                levels = 1
            } 
            if(frames > 500) {
                spawnTimer = 100;
                levels = 2
                spawn2Bat = true;
            }
            if(frames > 1000) {
                spawnDemon = false;
                spawnDog = true;
                spawnTimer = 90
                levels = 3
            }
            if(frames > 1500) {
                spawnTimer = 80
                levels = 4
                spawn2Bat = false;
            }
            if(frames > 2000) {
                spawnDog = false;
                spawnSlim = true;
                spawnTimer = 70
                levels = 5
            } 
            if(frames > 2500) {
                spawnTimer = 60;
                levels = 6
            }
            if(frames > 3000) {
                spawnSlim = false;
                spawnObst = true;
                spawnTimer = 55;
                levels = 7
                spawn2Bat = true;
            }
            if(frames > 5000) {
                spawnObst = false;
                spawnDog = true;
                spawnTimer = 50;
                levels = 8
                spawn2Bat = false;
            }
            if(frames > 6666) {
                spawnDog = false;
                spawnDemon = true;
                spawnTimer = 45;
                levels = 666
                spawn2Bat = true;
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
          slimes = [];
          dogs = [];
          demogorgons = [];
          spawnDemon = false;
          spawnSlim = false;
          spawnObst = false;
          spawnDog = false;
          spawn2Bat = false;
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

    for (let i = 0; i < slimes.length; i++) {
        let slime = slimes[i];
        if (slime.x + slime.width < 0) {
            slimes.splice(i, 1);
        };

        if (player.colision(slime)) {
          obstacles = [];
          slimes = [];
          dogs = [];
          demogorgons = [];
          spawnDemon = false;
          spawnSlim = false;
          spawnObst = false;
          spawnDog = false;
          spawn2Bat = false;
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

        slime.update();
    };

    for (let i = 0; i < dogs.length; i++) {
        let dog = dogs[i];
        if (dog.x + dog.width < 0) {
            dogs.splice(i, 1);
        };

        if (player.colision(dog)) {
          obstacles = [];
          slimes = [];
          dogs = [];
          demogorgons = [];
          spawnDemon = false;
          spawnSlim = false;
          spawnObst = false;
          spawnDog = false;
          spawn2Bat = false;
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

        dogs.update();
    };

    for (let i = 0; i < demogorgons.length; i++) {
        let demogorgon = demogorgons[i];
        if (demogorgon.x + demogorgon.width < 0) {
            demogorgons.splice(i, 1);
        };

        if (player.colision(demogorgon)) {
          obstacles = [];
          slimes = [];
          demogorgons = [];
          spawnDemon = false;
          spawnSlim = false;
          spawnObst = false;
          spawnDog = false;
          spawn2Bat = false;
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

        demogorgons.update();
    };

    for (let i = 0; i < bats.length; i++) {
        let bat = bats[i];
        if (bat.x + bat.width < 0) {
            bats.splice(i, 1);
        };

        if (player.colision(bat)) {
          bats = [];
          obstacles = [];
          slimes = [];
          dogs = [];
          demogorgons = [];
          spawnDemon = false;
          spawnSlim = false;
          spawnObst = false;
          spawnDog = false;
          spawn2Bat = false;
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
    player.playerDraw(frames);
    gameSpeed += 0.010;
    /* console.log(obstacles)
    console.log(frames)
    console.log(spawnTimer)
    console.log(levels)
    console.log(highLevel1)
    console.log(highLevel2)
    console.log(highLevel3)
    console.log(highScore1)
    console.log(highScore2)
    console.log(highScore3) */
    
};


let song = new Audio('./docs/assets/sounds/som_1.mp3');
song.loop = true;