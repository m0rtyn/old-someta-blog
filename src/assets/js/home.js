window.onload = () => {
  const linksOverVideos = document.getElementsByClassName('article-link');
  const vids = document.getElementsByTagName('video');

  for (let i = 0; i < vids.length; i++) {
    linksOverVideos[i].addEventListener('mouseover', () => {
      vids[i].play();
      console.log('over');
    });
    linksOverVideos[i].addEventListener('mouseout', () => {
      vids[i].pause();
      console.log('out');
    });
  }
};
