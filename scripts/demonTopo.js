class Obstacle2 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speedX = -gameSpeed;

    const img2 = new Image();
    img2.addEventListener("load", () => {});
    img2.src = "./docs/assets/images/smalldemon_top.png"; // nao ta trocando a img, ela continua como a mesma 'normal'
    this.img2 = img2;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  update() {
    this.x += this.speedX;
    this.demonDraw();
    this.speedX = -gameSpeed;
  }

  demonDraw() {
    ctx.drawImage(this.img2, this.x, this.y, 65, 65);
  }
};

// nao preciso me preocupar com a colisao do demontopo e do personagem1 pq eles nao vao estar no mesmo modo?