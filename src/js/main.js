const next = document.getElementById('btn-next');
const prew = document.getElementById('btn-prew');
const wrap = document.getElementById('telegram-wrapper');
const postNumber = document.getElementById('post-number').lastChild;
const metaStr = 'metabaza/';

const nextMessage = (e) => {
  const fr = wrap.getElementsByTagName('iframe')[0]
  const srcParts = fr.src.split(metaStr)
  srcParts[1] = srcParts[1].split('?')
  postNumber.textContent = Number(srcParts[1][0]) + 1
  srcParts[1][0] = Number(srcParts[1][0]) + 1
  srcParts[1] = srcParts[1].join('?')
  fr.src = srcParts.join(metaStr)
  fr.src = srcParts.join(metaStr)
}

const prewMessage = (e) => {
  const fr = wrap.getElementsByTagName('iframe')[0]
  const srcParts = fr.src.split(metaStr)
  srcParts[1] = srcParts[1].split('?')
  if (srcParts[1][0] > 11) {
    postNumber.textContent = Number(srcParts[1][0]) - 1
    srcParts[1][0] = Number(srcParts[1][0]) - 1
    srcParts[1] = srcParts[1].join('?')
    fr.src = srcParts.join(metaStr)
    } else {
    srcParts[1] = srcParts[1].join('?')
    fr.src = srcParts.join(metaStr)
  }
}

next.addEventListener('click', nextMessage);
prew.addEventListener('click', prewMessage);


const postExpander = document.querySelector('#post-expander');
const post = document.querySelector('*[id^="telegram-post-metabaza"]');

post.classList.add('cutted');
postExpander.addEventListener( 'click', () => {
  post.classList.toggle('cutted');
});




const grid = document.querySelector('.masonry-grid');

const msnry = new Masonry( grid, {
  itemSelector: '.masonry-grid-item',
  // columnWidth: '.masonry-grid-sizer',
  percentPosition: true,
  isAnimated: true,
});

// imagesLoaded( grid ).on( 'progress', function() {
//   // layout Masonry after each image loads
//   msnry.layout();
// });


// const root = document.documentElement;
// let rootHeight = root.clientHeight;
// console.log(rootHeight);

// console.log(document.body.scrollTop || document.documentElement.scrollTop, rootHeight * 0.3);
// window.addEventListener('scroll', () => {
//   if (document.body.scrollTop || document.documentElement.scrollTop === rootHeight * 0.3) {
//     console.log('Очевидно фич больше')
//   }
// })