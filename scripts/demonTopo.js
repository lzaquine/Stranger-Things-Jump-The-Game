class Obstacle2 {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speedX = -gameSpeed;

        const img2 = new Image();
        img2.addEventListener('load', () => {});
        img2.src = './docs/assets/images/smalldemon_top.png'; // nao ta trocando a img, ela continua como a mesma 'normal'
        this.img2 = img2;
    };

    update() {
        this.x += this.speedX;
        this.demonDraw();
        this.speedX = -gameSpeed;
    };

    demonDraw() {
        ctx.drawImage(this.img2, this.x, this.y, 100, 100);
    };
};

// nao preciso me preocupar com a colisao do demontopo e do personagem1 pq eles nao vao estar no mesmo modo?