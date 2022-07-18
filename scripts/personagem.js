class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speedY = 0;
        this.jumpForce = 15;
        this.originalHeight = height;
        this.grounded = false;
        this.jumpTimer = 0;
    }

    animate() {
        if (keys['KeyW']) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        } 

        this.y += this.speedY;

        if(this.y + this.height < cHeight) {
            this.speedY += gravity;
            this.grounded = false;
        } else {
            this.speedY = 0;
            this.grounded = true;
            this.y = cHeight - this.height;
        }

        this.draw();
    }

    jump() {
        if (this.grounded && this.jumpTimer === 0) {
            this.jumpTimer = 1;
            this.speedY = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.speedY = -this.jumpForce - (this.jumpTimer / 50);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    
});
document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});
// test mobile touch
this.addEventListener('touchend', function(e){happens(e)}, false);