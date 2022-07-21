class Player2 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speedY = 0;
    this.jumpForce = 13;
    this.grounded = false;
    this.jumpTimer = 0;

    const img = new Image();
    img.addEventListener("load", () => {});
    img.src = "./docs/assets/images/Small_Char_Top.png";
    this.img = img;
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

  colision(enemy) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  }

  animate() {
    if (keys["KeyZ"]) {
      this.jump();
    } else {
      this.jumpTimer = 0;
    }

    this.y += this.speedY;

    if (this.y > 0) {
      this.speedY -= gravity;
      this.grounded = false;
    } else {
      this.speedY = 0;
      this.grounded = true;
      this.y = 0;
    }

    this.playerDraw();
  }

  jump() {
    if (this.grounded && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.speedY += this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer > 10) {
      this.jumpTimer++;
      this.speedY = -this.jumpForce - this.jumpTimer / 50;
    }
  }

  playerDraw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
};