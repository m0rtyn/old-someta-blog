const grid = document.querySelector('.masonry-grid')

const msnry = new Masonry(grid, {
  itemSelector: '.masonry-grid-item',
  // columnWidth: '.masonry-grid-sizer',
  percentPosition: true,
  isAnimated: true,
})
