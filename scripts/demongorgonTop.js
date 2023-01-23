class Demogorgon2 {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = -gameSpeed;
  
      const demon1 = new Image();
      const demon2 = new Image();
      const demon3 = new Image();
      const demon4 = new Image();
      const demon5 = new Image();
      const demon6 = new Image();
      const demon7 = new Image();
      const demon8 = new Image();
      const demon9 = new Image();
      const demon10 = new Image();
  
      demon1.addEventListener("load", () => {})
      demon1.src = "./docs/assets/images/demogorgonTop/d1.png";
      demon2.addEventListener("load", () => {})
      demon2.src = "./docs/assets/images/demogorgonTop/d2.png";
      demon3.addEventListener("load", () => {})
      demon3.src = "./docs/assets/images/demogorgonTop/d3.png";
      demon4.addEventListener("load", () => {})
      demon4.src = "./docs/assets/images/demogorgonTop/d4.png";
      demon5.addEventListener("load", () => {})
      demon5.src = "./docs/assets/images/demogorgonTop/d5.png";
      demon6.addEventListener("load", () => {})
      demon6.src = "./docs/assets/images/demogorgonTop/d1.png";
      demon7.addEventListener("load", () => {})
      demon7.src = "./docs/assets/images/demogorgonTop/d2.png";
      demon8.addEventListener("load", () => {})
      demon8.src = "./docs/assets/images/demogorgonTop/d3.png";
      demon9.addEventListener("load", () => {})
      demon9.src = "./docs/assets/images/demogorgonTop/d4.png";
      demon10.addEventListener("load", () => {})
      demon10.src = "./docs/assets/images/demogorgonTop/d5.png";
  
      this.img8 = demon1;
      this.images = [demon1, demon2, demon3, demon4, demon5, demon6, demon7, demon8, demon9, demon10]
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
      this.dogDraw(frames);
      this.speedX = -gameSpeed;
    };
  
    dogDraw(frames) {
        this.img8 = this.images[Math.floor(frames % 60  / 7.5)]; 
      ctx.drawImage(this.img8, this.x, this.y, this.width, this.height);
    };
  };