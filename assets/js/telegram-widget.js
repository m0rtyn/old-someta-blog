"use strict";

/* eslint-env browser */
var next = document.getElementById('btn-next');
var prew = document.getElementById('btn-prew');
var wrap = document.getElementById('telegram-wrapper');
var postNumber = document.getElementById('post-number').lastChild;
var metaStr = 'metabaza/';

var nextMessage = function nextMessage() {
  var fr = wrap.getElementsByTagName('iframe')[0];
  var srcParts = fr.src.split(metaStr);
  srcParts[1] = srcParts[1].split('?');
  postNumber.textContent = Number(srcParts[1][0]) + 1;
  srcParts[1][0] = Number(srcParts[1][0]) + 1;
  srcParts[1] = srcParts[1].join('?');
  fr.src = srcParts.join(metaStr);
  fr.src = srcParts.join(metaStr);
};

var prewMessage = function prewMessage() {
  var fr = wrap.getElementsByTagName('iframe')[0];
  var srcParts = fr.src.split(metaStr);
  srcParts[1] = srcParts[1].split('?');

  if (srcParts[1][0] > 11) {
    postNumber.textContent = Number(srcParts[1][0]) - 1;
    srcParts[1][0] = Number(srcParts[1][0]) - 1;
    srcParts[1] = srcParts[1].join('?');
    fr.src = srcParts.join(metaStr);
  } else {
    srcParts[1] = srcParts[1].join('?');
    fr.src = srcParts.join(metaStr);
  }
};

next.addEventListener('click', nextMessage);
prew.addEventListener('click', prewMessage);
var postExpander = document.querySelector('#post-expander');
var post = document.querySelector('*[id^="telegram-post-metabaza"]');
post.classList.add('cutted');
postExpander.addEventListener('click', function () {
  post.classList.toggle('cutted');
});