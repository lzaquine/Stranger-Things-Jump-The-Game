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
        img2.src = './docs/assets/images/smalldemon-removebg-preview.png';
        this.img2 = img2;
    };

    update() {
        this.x += this.speedX;
        this.demonDraw();
        this.speedX = -gameSpeed;
    };

    demonDraw() {
        ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
    };
};

function spawnObstacle() {
    let size = demonSize(65, 65);
    let obstacle = new Obstacle(cWidth + size, cHeight - size, size, size);
    
    obstacles.push(obstacle);
};

function demonSize(min, max){
    return Math.round(Math.random() * (max-min) + min);
};