var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_img = "car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 10;
car2_img = "car2.png";

background_image = "car.jpg";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar1;
    car2_imgtag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
        car1_up();
        console.log("Up Arrow Key");
    }

    if (keypressed == '40') {
        car1_down();
        console.log("Down Arrow Key");
    }

    if (keypressed == '37') {
        car1_left();
        console.log("Left Arrow Key");
    }

    if (keypressed == '39') {
        car1_right();
        console.log("Right Arrow Key");
    }

    if (keypressed == '87') {
        car2_up();
        console.log("W Key");
    }

    if (keypressed == '83') {
        car2_down();
        console.log("S Key");
    }

    if (keypressed == '65') {
        car2_left();
        console.log("A Key");
    }

    if (keypressed == '68') {
        car2_right();
        console.log("D Key");
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When Up Arrow Key Is Pressed, X = " + car1_x + "Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_y <= 600) {
        car1_y = car1_y + 10;
        console.log("When Down Arrow Key Is Pressed, X = " + car1_x + "Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When Left Arrow Key Is Pressed, X = " + car1_x + "Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_x <= 800) {
        car1_x = car1_x + 10;
        console.log("When Right Arrow Key Is Pressed, X = " + car1_x + "Y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When Up Arrow Key Is Pressed, X = " + car2_x + "Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if (car2_y <= 600) {
        car2_y = car2_y + 10;
        console.log("When Down Arrow Key Is Pressed, X = " + car2_x + "Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When Left Arrow Key Is Pressed, X = " + car2_x + "Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if (car2_x <= 800) {
        car2_x = car2_x + 10;
        console.log("When Right Arrow Key Is Pressed, X = " + car2_x + "Y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}