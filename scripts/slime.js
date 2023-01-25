class Slime {
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
    slime1.src = "./docs/assets/images/slime/demonX1-removebg-preview.png";
    slime2.addEventListener("load", () => {})
    slime2.src = "./docs/assets/images/slime/demonX2-removebg-preview.png";
    slime3.addEventListener("load", () => {})
    slime3.src = "./docs/assets/images/slime/demonX3-removebg-preview.png";
    slime4.addEventListener("load", () => {})
    slime4.src = "./docs/assets/images/slime/demonX4-removebg-preview.png";
    slime5.addEventListener("load", () => {})
    slime5.src = "./docs/assets/images/slime/demonX5-removebg-preview.png";
    slime6.addEventListener("load", () => {})
    slime6.src = "./docs/assets/images/slime/demonX6-removebg-preview.png";
    slime7.addEventListener("load", () => {})
    slime7.src = "./docs/assets/images/slime/demonX7-removebg-preview.png";
    slime8.addEventListener("load", () => {})
    slime8.src = "./docs/assets/images/slime/demonX8-removebg-preview.png";

    this.img4 = slime1;
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
        this.x += this.speedX / 3;
        this.slimeDraw(frames);
        this.speedX = -gameSpeed;
      };
    
      slimeDraw(frames) {
        this.img4 = this.images[Math.floor(frames % 60  / 7.5)]; 
        ctx.drawImage(this.img4, this.x, this.y, this.width, this.height);
      };
    };
    
    function spawnSlimes() {
        let size = slimeSize(65, 65);
        let obstacle;
    
        if (player.y <= 150) {
            obstacle = new Slime2(780, 0, size, size);
        } else {
            obstacle = new Slime(780 + size, 552 - size, size, size);
        }
        Math.random(obstacles.push(obstacle));
        console.log(obstacle)
    };

    function slimeSize(min, max){
        return Math.round(Math.random() * (max-min) + min);
    };