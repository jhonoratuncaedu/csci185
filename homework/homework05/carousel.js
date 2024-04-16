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
    const caption = document.querySelector("#theimage");
    caption.innerHTML=`Image (${idx+1}) of 10`;
}

function forward() {
    if (idx === 9){
        idx=0;
    } else {
        idx+=1;
    }
    console.log(idx);
    showImage();
}

function back() {
    if (idx === 0){
        idx=9;
    } else {
        idx-=1;
    }
    console.log(idx);
    showImage();
}

