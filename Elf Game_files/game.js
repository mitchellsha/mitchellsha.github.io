var CANVAS_WIDTH = 480,
    CANVAS_HEIGHT = 320;
var LANES = 7;
var FPS = 60;
var SPEED = 3;
var canvas;
var obstacles = [],
    collectables = [],
    stores = [];
var score = 0;
var obstacleRate = 0.01,
    collectRate = 0.03,
    storeRate = 0.001;

$(window).ready(function () {
    if (IsMobileDevice()) {
        console.log('on mobile device');
        MobileSetup();
    } else {
        console.log('not on mobile device');
        DefaultSetup();
    }
});

function DefaultSetup() {
    var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
    canvas = canvasElement.get(0).getContext("2d");
    canvasElement.appendTo('#framedDiv');

    var func = function () {
        update();
        draw();
    };
    setInterval(func, 1000 / FPS);

    BindKeyControls();
    FixDisplay(58);
}

function MobileSetup() {
    $(document).width = $(window).width;
    $(document).height = $(window).height;
    CANVAS_WIDTH = document.body.clientWidth;
    CANVAS_HEIGHT = document.body.clientHeight;
    document.body.style.overflow = 'hidden';
    var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
    canvas = canvasElement.get(0).getContext("2d");
    canvasElement.prependTo('body');

    var func = function () {
        update();
        draw();
    };
    setInterval(func, 1000 / FPS);

    BindTouchControls();
    document.getElementById('keyControls').style.display = 'none';
    document.getElementById('elfSign').style.display = 'none';
    document.getElementById('framedDiv').style.display = 'none';
    //FixDisplay(0);
}

function FixDisplay(frameWidth) {
    //debugger;
    var w = CANVAS_WIDTH + 2 * frameWidth;
    var h = CANVAS_HEIGHT + 2 * frameWidth;
    var div = $('#framedDiv')[0];
    div.style.width = w + "px";
    div.style.height = h + "px";
}

function update() {
    player.update();

    //OBSTACLES
    obstacles.forEach(function (o) {
        o.update();
    });
    obstacles = obstacles.filter(function (o) {
        return o.active;
    });
    if (Math.random() < obstacleRate) {
        obstacles.push(Obstacle());
    }

    //COLLECTABLES
    collectables.forEach(function (c) {
        c.update();
    });
    collectables = collectables.filter(function (c) {
        return c.active;
    });
    if (Math.random() < collectRate) {
        collectables.push(Collectable());
    }

    //STORE
    stores.forEach(function (s) {
        s.update();
    });
    stores = stores.filter(function (s) {
        return s.active;
    });
    if (stores.length < 1 && Math.random() < storeRate) {
        stores.push(Store());
    }

    if (player.active) {
        handleCollisions();
    }

    background.update();
}
function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    background.draw();
    obstacles.forEach(function (o) {
        o.draw();
    });
    collectables.forEach(function (c) {
        c.draw();
    });
    player.draw();
    stores.forEach(function (s) {
        s.draw();
    });
    DrawScore();
}

function collides(a, b) {
    return a.x < b.x + b.width &&   //left of a
           a.x + a.width > b.x &&   //right of a
           a.y < b.y + b.height &&  //above a
           a.y + a.height > b.y;    //below a
}

function handleCollisions() {
    collectables.forEach(function (coll) {
        if (collides(coll, player)) {
            coll.explode();
        }
    });

    obstacles.forEach(function (obst) {
        if (collides(obst, player)) {
            obst.active = false;
            player.explode();
        }
        if (stores[0] && collides(obst, stores[0])) {
            obst.active = false;
        }
    });

    stores.forEach(function (s) {
        if (collides(player, s)) {
            s.explode();
        }
    });
}

function DrawScore() {
    var buffer = 5;
    var imgWidth = 25;
    var imgHeight = 25;
    canvas.fillStyle = "black";
    canvas.font = "15px Verdana";
    canvas.textAlign = "start";
    canvas.drawImage(CollSprite, buffer, CANVAS_HEIGHT - imgHeight, imgWidth, imgHeight);
    canvas.fillText(score, buffer + imgWidth, CANVAS_HEIGHT - buffer);
}

function IsMobileDevice() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}