"use strict";

window.onload = function () {
  var linksOverVideos = document.getElementsByClassName('article-link');
  var vids = document.getElementsByTagName('video');

  var _loop = function _loop(i) {
    linksOverVideos[i].addEventListener('mouseover', function () {
      vids[i].play();
    });
    linksOverVideos[i].addEventListener('mouseout', function () {
      vids[i].pause();
    });
  };

  for (var i = 0; i < vids.length; i++) {
    _loop(i);
  }
};