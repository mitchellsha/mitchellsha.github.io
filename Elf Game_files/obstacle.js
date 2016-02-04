var ObstSprite = Sprite("images/obstacle.png");

function Obstacle(obst) {
    obst = obst || {};

    obst.active = true;
    //obst.age = Math.floor(Math.random() * 128);
    obst.width = 40;
    obst.height = 40;
    obst.x = (CANVAS_WIDTH - obst.width) / (LANES - 1) * Math.floor(Math.random() * LANES);
    obst.y = -obst.height;
    obst.xVelocity = 0;
    obst.yVelocity = SPEED;

    obst.image = obst.image || ObstSprite;

    obst.inBounds = function () {
        return this.x >= 0 && this.x <= CANVAS_WIDTH &&
          this.y <= CANVAS_HEIGHT;
    };

    obst.update = function () {
        //obst.x += obst.xVelocity;
        obst.y += obst.yVelocity;

        //obst.xVelocity = 3 * Math.sin(obst.age * Math.Pobst / 64);

        //obst.age++;

        obst.active = obst.active && obst.inBounds();
    };

    obst.draw = function () {
        canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    return obst;
}