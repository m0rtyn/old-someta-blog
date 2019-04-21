"use strict";

var grid = document.querySelector('.masonry-grid');
var msnry = new Masonry(grid, {
  itemSelector: '.masonry-grid-item',
  // columnWidth: '.masonry-grid-sizer',
  percentPosition: true,
  isAnimated: true
});