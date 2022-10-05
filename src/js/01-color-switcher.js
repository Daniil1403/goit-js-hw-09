const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let changeId = null;

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  setBodyColor();
  changeId = setInterval(setBodyColor, 1000);
}

function stopChangeColor() {
  clearInterval(changeId);
  refs.startBtn.removeAttribute('disabled');
}

function setBodyColor() {
  refs.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
