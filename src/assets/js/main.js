/* eslint-env browser */

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

if (window.outerWidth < 500) {
  setTimeout(() => {
    burger.classList.add('slip-appearance');
  }, 1300);

  document.addEventListener('click', (evt) => {
    if (header.contains(evt.target)) {
      nav.classList.add('slip-appearance');
      burger.classList.remove('slip-appearance');
      burger.style.display = 'none';
    } else {
      nav.classList.remove('slip-appearance');
      burger.classList.add('slip-appearance');
      burger.style.display = 'block';
    }
  });
}
