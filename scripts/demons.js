class Obstacle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speedX = -gameSpeed;
    }

    update() {
        this.x += this.speedX;
        this.draw();
        this.speedX = -gameSpeed;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
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