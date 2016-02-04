var background = {
    x: 0,
    y: 0,
    speed: SPEED,
    image: Sprite("images/background.png"),
    update: function () {
        this.y += this.speed;
        if (this.y > CANVAS_HEIGHT) {
            this.y = 0;
        }
    },
    draw: function () {
        canvas.drawImage(this.image, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
        canvas.drawImage(this.image, this.x, this.y - CANVAS_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
};