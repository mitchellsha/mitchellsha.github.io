var CollSprite = Sprite("images/collectable.png");

function Collectable(coll) {
    coll = coll || {};

    coll.active = true;
    //coll.age = Math.floor(Math.random() * 128);
    coll.width = 25;
    coll.height = 25;
    coll.x = (CANVAS_WIDTH - coll.width) / (LANES - 1) * Math.floor(Math.random() * LANES);
    coll.y = -coll.height;
    coll.xVelocity = 0;
    coll.yVelocity = SPEED;

    coll.image = coll.image || CollSprite;

    coll.inBounds = function () {
        return this.x >= 0 && this.x <= CANVAS_WIDTH &&
          this.y <= CANVAS_HEIGHT;
    };

    coll.update = function () {
        //coll.x += coll.xVelocity;
        coll.y += coll.yVelocity;

        //coll.xVelocity = 3 * Math.sin(coll.age * Math.Pcoll / 64);

        //coll.age++;

        coll.active = coll.active && coll.inBounds();
    };

    coll.draw = function () {
        canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    coll.explode = function () {
        score++;
        this.active = false;
    };

    return coll;
}