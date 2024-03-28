function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/rect
    fill('brown');
    strokeWeight(0);
    rect(700, 500, 150, 500);

    // https://p5js.org/reference/#/p5/circle
    fill("green")
    circle(875, 500, 300);

    // https://p5js.org/reference/#/p5/circle
    fill("green")
    circle(650, 500, 300);

    // https://p5js.org/reference/#/p5/circle
    fill("green")
    circle(775, 375, 300);

    // https://p5js.org/reference/#/p5/ellipse
    fill('aqua');
    ellipse(1500, 450, 175, 100);

    // https://p5js.org/reference/#/p5/circle
    fill("black")
    circle(1500, 475, 100);

    // https://p5js.org/reference/#/p5/circle
    fill("black")
    circle(1500, 425, 100);

    // https://p5js.org/reference/#/p5/circle
    fill("yellow")
    circle(1500, 450, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('black');
    strokeWeight(0);
    rect(1450, 444, 100, 25);



    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);



    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line

    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}