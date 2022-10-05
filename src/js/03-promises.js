import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitButton: document.querySelector('button'),
};
let intervalId = null;

refs.submitButton.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delay = +refs.delay.value;
  const step = +refs.step.value;
  const amount = +refs.amount.value;
  callPromise(delay, step, amount);
}

function callPromise(delay, step, amount) {
  setTimeout(() => {
    let position = 0;
    intervalId = setInterval(() => {
      position += 1;
      if (position === +amount) {
        clearInterval(intervalId);
      }
      createPromise(position, delay);
      delay += step;
    }, step);
  }, delay);
}

function createPromise(position, delay) {
  return new Promise(() => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      // Fulfill
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    }
  });
}
