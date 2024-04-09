const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["red", "blue", "green", "yellow", "purple"];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1);

    fill("#08415c");
}
function draw() {
    clear();
    let counter = 0;
    while (counter < 10) {
        let color = colors[randomInt(0, 4)]
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt (200, 200);
        circle(x, y, size);
        counter++;
    }
}

