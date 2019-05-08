/* eslint-env browser */

const appendContent = (data) => {
  const postPreviews = [...document.getElementsByClassName('post-item')];
  // console.log(postPreviews);
  postPreviews.map((el, i) => {
    if (data[i].isPublished === false) return;

    const postLink = document.createElement('A');
    const postDescr = document.createElement('P');
    const postDate = document.createElement('TIME');
    const postTag = document.createElement('SPAN');
    const title = data[i].title.replace(/\d+_/g, '');
    const postPath = data[i].path.replace(/public\//g, '');
    // const { date } = data[i];
    // const { tag } = data[i];

    postLink.classList.add('post-link');
    postLink.href = postPath;
    postLink.innerHTML = title;

    postDescr.classList.add('post-descr');
    postDescr.innerHTML = data[i].description;

    postDate.classList.add('post-date');
    postDate.innerHTML = data[i].date;

    postTag.classList.add('post-tag');
    postTag.innerHTML = data[i].tag;

    el.appendChild(postLink);
    el.appendChild(postDescr);
    el.appendChild(postDate);
    el.appendChild(postTag);
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
