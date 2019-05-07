/* eslint-env browser */

const appendContent = (data) => {
  const postPreviews = [...document.getElementsByClassName('post-item')];
  // console.log(postPreviews);
  postPreviews.map((el, i) => {
    const postLink = document.createElement('A');
    const postDescr = document.createElement('P');
    const title = data[i].title.replace(/\d+_/g, '');
    const postPath = data[i].path.replace(/public\//g, '');

    postLink.classList.add('post-link');
    postLink.href = postPath;
    postLink.innerHTML = title;

    postDescr.classList.add('post-descr');
    postDescr.innerHTML = data[i].description;

    el.appendChild(postLink);
    el.appendChild(postDescr);
  });
};

const createPreviews = (data) => {
  const container = document.getElementById('posts-previews');
  const postList = document.createElement('UL');
  data.map(() => {
    const postWrapper = document.createElement('LI');
    postWrapper.classList.add('post-item');
    return postList.appendChild(postWrapper);
  });
  container.appendChild(postList);
  return data;
};

fetch(
  '/posts.json',
)
  .then(response => response.json())
  .then(createPreviews)
  .then(appendContent);
