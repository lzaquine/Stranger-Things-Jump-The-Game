class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speedY = 0;
        this.jumpForce = 9;
        this.grounded = false;
        this.jumpTimer = 0;

        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = './docs/assets/images/Small_Char.png';
        this.img = img;
    };

    animate() {
        if (keys['KeyW']) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        };
        
        this.y += this.speedY;

        if(this.y + this.height < cHeight) {
            this.speedY += gravity;
            this.grounded = true
        } else {
            this.speedY = 0;
            this.grounded = true;
            this.y = cHeight - this.height;
        };

        /* this.draw(); */
        this.playerDraw();
    };

    jump() {
        if (this.grounded && this.jumpTimer === 0) {
            this.jumpTimer = 1;
            this.speedY = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 10) {
            this.jumpTimer++;
            this.speedY = -this.jumpForce - (this.jumpTimer / 50);
        };
    };

    playerDraw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
};

document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    
});
document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});