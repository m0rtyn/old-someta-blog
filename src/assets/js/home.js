/* eslint-env browser */
window.onload = () => {
  const linksOverVideos = document.getElementsByClassName('paper-link');
  const vids = document.getElementsByTagName('video');

  for (let i = 0; i < vids.length; i++) {
    linksOverVideos[i].addEventListener('mouseover', () => {
      vids[i].play();
    });
    linksOverVideos[i].addEventListener('mouseout', () => {
      vids[i].pause();
    });
  }
};
