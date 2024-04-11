const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


function showImage() {
    console.log("Show image", idx);
    const img = document.querySelector ("#theimage")
    img.src = photos[idx];
}

function forward() {
    idx += 1;
    showImage();
}

function back() {
    idx -= 1;
    showImage();
}

// Also target caption
// Set less that 0 to 9 / more than 9 to 0 