class Bats2 {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = -gameSpeed;
  
    const bat1 = new Image();
    const bat2 = new Image();
    const bat3 = new Image();
    const bat4 = new Image();
    const bat5 = new Image();
    const bat6 = new Image();
    const bat7 = new Image();
    const bat8 = new Image();

    bat1.addEventListener("load", () => {})
    bat1.src = "./docs/assets/images/Bats/upsidedown/bat1_upsidedown-removebg-preview.png";
    bat2.addEventListener("load", () => {})
    bat2.src = "./docs/assets/images/Bats/upsidedown/bat2_upsidedown-removebg-preview.png";
    bat3.addEventListener("load", () => {})
    bat3.src = "./docs/assets/images/Bats/upsidedown/bat3_upsidedown-removebg-preview.png";
    bat4.addEventListener("load", () => {})
    bat4.src = "./docs/assets/images/Bats/upsidedown/bat4_upsidedown-removebg-preview.png";
    bat5.addEventListener("load", () => {})
    bat5.src = "./docs/assets/images/Bats/upsidedown/bat5_upsidedown-removebg-preview.png";
    bat6.addEventListener("load", () => {})
    bat6.src = "./docs/assets/images/Bats/upsidedown/bat6_upsidedown-removebg-preview.png";
    bat7.addEventListener("load", () => {})
    bat7.src = "./docs/assets/images/Bats/upsidedown/bat7_upsidedown-removebg-preview.png";
    bat8.addEventListener("load", () => {})
    bat8.src = "./docs/assets/images/Bats/upsidedown/bat8_upsidedown-removebg-preview.png";

    this.img3 = bat1;
    this.images = [bat1, bat2, bat3, bat4, bat5, bat6, bat7, bat8]
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
      this.x += this.speedX / 3;
      this.batDraw(frames);
    };
  
    batDraw(frames) {
        this.img3 = this.images[Math.floor(frames % 120  / 15)]; 
        ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
     
      };
  };