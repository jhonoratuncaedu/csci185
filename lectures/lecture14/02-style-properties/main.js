function makeRed () {
    const containter = document.querySelector("#section1");
    containter.style.backgroundColor = "red"; 
}

function makeBlue () {
    const containter = document.querySelector("#section2");
    containter.style.backgroundColor = "blue"; 
}

function makePink () {
    const containter = document.querySelector("#section3");
    containter.style.backgroundColor = "pink";
}

function makeOrange () {
    const containter = document.querySelector("#section4");
    containter.style.backgroundColor = "orange";
}

function Reset () {
    const s1 = document.querySelector("#section1");
    const s2 = document.querySelector("#section2");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
    s4.style.backgroundColor = "white";
}