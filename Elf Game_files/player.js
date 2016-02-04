var UP = 38,
    DOWN = 40,
    LEFT = 37,
    RIGHT = 39;

var player = {
    active: true,
    width: 50,
    height: 50,
    x: 0,
    y: CANVAS_HEIGHT - 75,
    midpoint: function () {
        return {
            x: this.x + this.width / 2,
            y: this.x + this.height / 2
        };
    },
    image: Sprite("images/player.png"),
    update: function () {
        if (this.keydown === LEFT) {
            this.x -= (CANVAS_WIDTH - this.width) / (LANES - 1);
        } else if (this.keydown === RIGHT) {
            this.x += (CANVAS_WIDTH - this.width) / (LANES - 1);
        }
        this.x = this.x.clamp(0, CANVAS_WIDTH - this.width);
        this.keydown = null;
    },
    draw: function () {
        if (this.active) {
            canvas.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            var size = 30;
            canvas.fillStyle = "red";
            canvas.font = size + "px Verdana";
            canvas.textAlign = "center";
            canvas.fillText("GAME OVER", CANVAS_WIDTH / 2, (CANVAS_HEIGHT + size) / 2);
        }
    },
    explode: function () {
        //this.active = false;
        score -= 10;
        score = (score >= 0) ? score : 0;
    },
    keydown: null
};

Number.prototype.clamp = function (min, max) {
    var temp = Math.max(this, min);
    return Math.min(temp, max);
};

function BindKeyControls() {
    $(document).bind('keydown', function (e) {
        player.keydown = e.keyCode;
    });

    BindTouchControls();
}

function BindTouchControls() {
    $('canvas').click(function (e) {
        e.preventDefault();
        if (e.offsetX < CANVAS_WIDTH / 2) {
            player.keydown = LEFT;
        } else {
            player.keydown = RIGHT;
        }
    });

    $('canvas').dblclick(function (e) {
        e.preventDefault();
    });

    $(document).dblclick(function (e) {
        e.preventDefault();
    });
    $(document).click(function (e) {
        e.preventDefault();
    });
}