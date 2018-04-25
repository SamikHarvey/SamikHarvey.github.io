var scene;
var paddle;
var paddle2;
var ball;
var moveSound;
var CHANGE = 5;
var output;


function init() {
    scene = new Scene();
    scene.setSize(600, 600);
    ball =new Sprite(scene, "http://aharrisbooks.net/h5g/coin.svg", 25, 25); 
    ball.setSpeed(5);
    ball.setMoveAngle(30)
    ball.setPosition(scene.width / 2, scene.height / 2);
    ball.setBoundAction(BOUNCE);
    paddle = new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(5);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(paddle.height, scene.height / 2);
    paddle2.setPosition(scene.width - paddle2.height, scene.height / 2);


    output = document.getElementById("output");
    scene.start();

}

function Paddle() {
    tPaddle = new Sprite(scene, "paddle.png", 100, 25);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }

        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - tPaddle.width / 2);
            }

        }


    }

    tPaddle.checkKeysINV = function() {
        if (keysDown[K_DOWN]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_UP]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }

    }

    return tPaddle;
}

function checkCollisions() {
    //DISTANCE COLLISION
    dist = paddle.distanceTo(ball);
    output.innerHTML = dist;
    if (dist - ball.width / 2 - paddle.width / 2 < 0) {
        output.innerHTML = dist;
        ball.dx *= -1;
        ball.dy *= -1;
    } else {
        output.innerHTML = dist;
    }
    dist = paddle2.distanceTo(ball);
    output.innerHTML = dist;
    if (dist - ball.width / 2 - paddle2.width / 2 < 0) {
        output.innerHTML = dist;
        ball.dx *= -1;
        ball.dy *= -1;
    } else {
        output.innerHTML = dist;
    }

}






function update() {
    scene.clear();
    checkCollisions();
    paddle.checkKeys();
    ball.update();
    paddle.update();
    paddle2.update();
}