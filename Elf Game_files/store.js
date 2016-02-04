var StoreSprite = Sprite("images/store.png"),
    HitSprite0 = Sprite("images/storehit0.png");

function Store(store) {
    store = store || {};

    store.active = true;
    store.hit = false;
    store.width = 70;
    store.height = 75;
    store.x = (CANVAS_WIDTH - store.width) / (LANES - 1) * Math.floor(Math.random() * LANES);
    store.y = -store.height;
    store.yVelocity = SPEED * 2;

    store.image = store.image || StoreSprite;

    store.inBounds = function () {
        return this.x >= 0 && this.x <= CANVAS_WIDTH &&
          this.y <= CANVAS_HEIGHT;
    };

    store.update = function () {
        store.y += store.yVelocity;

        store.active = store.active && store.inBounds();
    };

    store.draw = function () {
        if (this.hit) {
            canvas.drawImage(HitSprite0, this.x, this.y, this.width, this.height);
        } else {
            canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    };

    store.explode = function () {
        score++;
        if (!this.hit) {
            score += 50;
            this.hit = true;
        }
    };

    return store;
}