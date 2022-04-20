const body = document.querySelector('body');
const imageNumber = 3;

function showImage(number) {
    const image = new Image();
    image.src = `images/${number + 1}.jpg`;
    image.classList.add('bg-image');
    body.prepend(image);
}

function getRandomNumber() {
    const number = Math.floor(Math.random() * imageNumber);
    return number;
}

function init() {
    const randomNumber = getRandomNumber();
    showImage(randomNumber);
}

init()