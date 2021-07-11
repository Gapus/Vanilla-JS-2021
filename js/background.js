const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];


const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(image/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat= "no-repeat";