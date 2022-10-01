const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function changeColor() {
  setTimeout(getRandomHexColor(), 1000);
}

function stopChangeColor() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);
