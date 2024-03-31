function setup() {
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged() {
    const color = document.querySelector("#color").value;
    fill(color);
    const size = Number(document.querySelector("#size").value);
    const shape = document.querySelector("#shape").value;
    strokeWeight(10)

    if (shape === "circle") {
        circle(mouseX, mouseY, size);
    }

    else if (shape === "square") {
        square(mouseX, mouseY, size);
    }

    else {
        triangle(
            mouseX, mouseY,
            mouseX - size / 2, mouseY + size,
            mouseX + size / 2, mouseY + size,
        )
    }
}

// https://p5js.org/reference/#/p5/circle

// https://p5js.org/reference/#/p5/square

// https://p5js.org/reference/#/p5/triangle


//30, 80,

//70, 80
