class Slime2 {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = -gameSpeed;
  
    const slime1 = new Image();
    const slime2 = new Image();
    const slime3 = new Image();
    const slime4 = new Image();
    const slime5 = new Image();
    const slime6 = new Image();
    const slime7 = new Image();
    const slime8 = new Image();

    slime1.addEventListener("load", () => {})
    slime1.src = "./docs/assets/images/slime_up/demonX1_up.png";
    slime2.addEventListener("load", () => {})
    slime2.src = "./docs/assets/images/slime_up/demonX2_up.png";
    slime3.addEventListener("load", () => {})
    slime3.src = "./docs/assets/images/slime_up/demonX3_up.png";
    slime4.addEventListener("load", () => {})
    slime4.src = "./docs/assets/images/slime_up/demonX4_up.png";
    slime5.addEventListener("load", () => {})
    slime5.src = "./docs/assets/images/slime_up/demonX5_up.png";
    slime6.addEventListener("load", () => {})
    slime6.src = "./docs/assets/images/slime_up/demonX6_up.png";
    slime7.addEventListener("load", () => {})
    slime7.src = "./docs/assets/images/slime_up/demonX7_up.png";
    slime8.addEventListener("load", () => {})
    slime8.src = "./docs/assets/images/slime_up/demonX8_up.png";

    this.img5 = slime1;
    this.images = [slime1, slime2, slime3, slime4, slime5, slime6, slime7, slime8]
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
  
    update() {
      this.x += this.speedX / 2.5;
      this.slimeDraw(frames);
      this.speedX = -gameSpeed;
    };
  
    slimeDraw(frames) {
      this.img5 = this.images[Math.floor(frames % 60  / 7.5)]; 
      ctx.drawImage(this.img5, this.x, this.y, this.width, this.height);
    };
  };