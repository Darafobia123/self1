class Gun {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.gun_image = loadImage("images/gun.png");
    }
    display() {
     if (keyIsDown(DOWN_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(UP_ARROW) && this.angle>-30 ) {
        this.angle -= 1;
      }
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.gun_image, 0, 0, this.width, this.height);
      pop();
     
    }
  }