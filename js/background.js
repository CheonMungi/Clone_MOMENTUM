const images = [
    "01.jpeg","02.jpeg","03.jpeg","04.jpeg","05.jpeg"
];

const curImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${curImage}`;

document.body.appendChild(bgImage);