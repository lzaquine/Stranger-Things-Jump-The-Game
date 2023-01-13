class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedY = 0;
    this.jumpForce = 14.5;
    this.grounded = false;
    this.jumpTimer = 0;

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    const img6 = new Image();
    const img7 = new Image();
    const img8 = new Image();

    img1.addEventListener("load", () => {})
    img1.src = "./docs/assets/images/player_frames_img/img_player_1.png";
    img2.addEventListener("load", () => {})
    img2.src = "./docs/assets/images/player_frames_img/img_player_2.png";
    img3.addEventListener("load", () => {})
    img3.src = "./docs/assets/images/player_frames_img/img_player_3.png";
    img4.addEventListener("load", () => {})
    img4.src = "./docs/assets/images/player_frames_img/img_player_4.png";
    img5.addEventListener("load", () => {})
    img5.src = "./docs/assets/images/player_frames_img/img_player_5.png";
    img6.addEventListener("load", () => {})
    img6.src = "./docs/assets/images/player_frames_img/img_player_6.png";
    img7.addEventListener("load", () => {})
    img7.src = "./docs/assets/images/player_frames_img/img_player_7.png";
    img8.addEventListener("load", () => {})
    img8.src = "./docs/assets/images/player_frames_img/img_player_8.png";

    this.img = img1;
    this.images = [img1, img2, img3, img4, img5, img6, img7, img8]
  };

  left() {
    return this.x;
  };

  right() {
    return this.x + this.width;
  };

  top() {
    return this.y;
  };

  bottom() {
    return this.y + this.height;
  };

  colision(enemy) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  };

  animate(frames) {
    if (keys["KeyZ"]) {
      this.jump();
    } else {
      this.jumpTimer = 0;
    };

    this.y += this.speedY;

    if (this.y + this.height < cHeight) {
      this.speedY += gravity;
      this.grounded = false;
    } else {
      this.speedY = 0;
      this.grounded = true;
      this.y = cHeight - this.height;
    }

  };

  jump() {
    if (this.grounded && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.speedY = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 10) {
      this.jumpTimer++;
      this.speedY = -this.jumpForce - this.jumpTimer / 50;
    };
  };

  playerDraw(frames) {
    this.img = this.images[Math.floor(frames % 30  / 3.75)]; 
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
 
  };
};

document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    
});

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});