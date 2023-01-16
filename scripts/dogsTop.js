class Dogs2 {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = -gameSpeed;
  
      const dogs1 = new Image();
      const dogs2 = new Image();
      const dogs3 = new Image();
      const dogs4 = new Image();
      const dogs5 = new Image();
      const dogs6 = new Image();
      const dogs7 = new Image();
      const dogs8 = new Image();
  
      dogs1.addEventListener("load", () => {})
      dogs1.src = "./docs/assets/images/dogs_up/dog1_up.png";
      dogs2.addEventListener("load", () => {})
      dogs2.src = "./docs/assets/images/dogs_up/dog2_up.png";
      dogs3.addEventListener("load", () => {})
      dogs3.src = "./docs/assets/images/dogs_up/dog3_up.png";
      dogs4.addEventListener("load", () => {})
      dogs4.src = "./docs/assets/images/dogs_up/dog4_up.png";
      dogs5.addEventListener("load", () => {})
      dogs5.src = "./docs/assets/images/dogs_up/dog5_up.png";
      dogs6.addEventListener("load", () => {})
      dogs6.src = "./docs/assets/images/dogs_up/dog6_up.png";
      dogs7.addEventListener("load", () => {})
      dogs7.src = "./docs/assets/images/dogs_up/dog7_up.png";
      dogs8.addEventListener("load", () => {})
      dogs8.src = "./docs/assets/images/dogs_up/dog8_up.png";
  
      this.img7 = dogs1;
      this.images = [dogs1, dogs2, dogs3, dogs4, dogs5, dogs6, dogs7, dogs8]
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
        this.img7 = this.images[Math.floor(frames % 60  / 7.5)]; 
      ctx.drawImage(this.img7, this.x, this.y, this.width, this.height);
    };
  };