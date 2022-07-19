class Obstacle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speedX = -gameSpeed;

        const img2 = new Image();
        img2.addEventListener('load', () => {});
        img2.src = '../docs/assets/images/demogorgon.png'
        this.img2 = img2;
    }

    update() {
        this.x += this.speedX;
        this.demonDraw();
        this.speedX = -gameSpeed;
    }

    /* draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    } */

    demonDraw() {
        ctx.drawImage(this.img2, this.x, this.y, 100, 100);
    }
} 

function spawnObstacle() {
    let size = demonSize(40, 40);
    let obstacle = new Obstacle(cWidth + size, cHeight - size, size, size, 'black');

    
    obstacles.push(obstacle);
}

function demonSize(min, max){
    return Math.round(Math.random() * (max-min) + min)
}


// game = start
//start new game
/* let newGame = document.querySelector('.btn_start');
newGame.addEventListener('click', function(){
    if(!isRunning) {
        reset();
    } else if (isRunning) {
        start();
    }
}); */