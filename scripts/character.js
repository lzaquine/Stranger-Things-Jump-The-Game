const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;


const gravity = 0.9
/* const normal = normalgame
const upsideDown = upsideDownGame
? */

class Hopper {
    constructor() {
        this.position = {
            x: 80,
            y: 272
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 50
        this.height = 80
        this.ctx = ctx;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= cHeight) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}

const hopper = new Hopper()
hopper.update();

function animate () {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, cWidth, cHeight);
    hopper.update();
    /* demon.draw(); */
}
animate();

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            hopper.velocity.y -= 20;
            break;
        case 'Space':
            hopper.velocity.y -= 20;
            break;
        case 'KeyW':
            hopper.velocity.y -= 20;
            break;
    }
});
/* como posso fazer pra que quando eu apertar espaco e a arrowup a pagina nao mova pra cima?
quando aperto pra pular, posso pular mais de 1x, como nao fazer isso? */

