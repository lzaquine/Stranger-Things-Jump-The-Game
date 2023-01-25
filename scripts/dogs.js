class Dogs {
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
    dogs1.src = "./docs/assets/images/dogs/dog1.png";
    dogs2.addEventListener("load", () => {})
    dogs2.src = "./docs/assets/images/dogs/dog2.png";
    dogs3.addEventListener("load", () => {})
    dogs3.src = "./docs/assets/images/dogs/dog3.png";
    dogs4.addEventListener("load", () => {})
    dogs4.src = "./docs/assets/images/dogs/dog4.png";
    dogs5.addEventListener("load", () => {})
    dogs5.src = "./docs/assets/images/dogs/dog5.png";
    dogs6.addEventListener("load", () => {})
    dogs6.src = "./docs/assets/images/dogs/dog6.png";
    dogs7.addEventListener("load", () => {})
    dogs7.src = "./docs/assets/images/dogs/dog7.png";
    dogs8.addEventListener("load", () => {})
    dogs8.src = "./docs/assets/images/dogs/dog8.png";

    this.img6 = dogs1;
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
        this.x += this.speedX / 3;
        this.dogsDraw(frames);
        this.speedX = -gameSpeed;
      };
    
      dogsDraw(frames) {
        this.img6 = this.images[Math.floor(frames % 60  / 7.5)]; 
        ctx.drawImage(this.img6, this.x, this.y, this.width, this.height);
      };
    };
    
    function spawnDogs() {
        let size = dogsSize(65, 65);
        let obstacle;
    
        if (player.y <= 150) {
            obstacle = new Dogs2(800, 0, size, size);
        } else {
            obstacle = new Dogs(800 + size, 552 - size, size, size);
        }
        Math.random(obstacles.push(obstacle));
        console.log(obstacle)
    };

    function dogsSize(min, max){
        return Math.round(Math.random() * (max-min) + min);
    };