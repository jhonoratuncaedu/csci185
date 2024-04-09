function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let counter = 1;
    let y = 0;
    let x= 0;
    let z = 0
    while (counter < 100) {

        circle(x, y, z);
        x +=3;
        y += 5;
        z += 8;
        counter += 1;
    }



    drawGrid(canvasWidth, canvasHeight);
}
