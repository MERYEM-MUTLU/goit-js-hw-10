import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;

  createNotification(delay, state);
});

function createNotification(delay, state) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); // delay değeri
      } else {
        reject(delay); // delay değeri
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
      });
    });
}
