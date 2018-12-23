/* eslint-env browser */

// imagesLoaded( grid ).on( 'progress', function() {
//   // layout Masonry after each image loads
//   msnry.layout();
// });

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

if (window.outerWidth < 500) {
  setTimeout(() => {
    burger.classList.add('slip-appearance');
  }, 2000);

  document.addEventListener('click', (evt) => {
    if (nav.contains(evt.target)) {
      nav.classList.add('slip-appearance');
      burger.classList.remove('slip-appearance');
    } else {
      nav.classList.remove('slip-appearance');
      burger.classList.add('slip-appearance');
    }
  });
}
