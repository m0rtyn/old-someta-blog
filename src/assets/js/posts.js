/* eslint-env browser */

const createPosts = (data) => {
  const container = document.getElementById('posts-previews');
  const postList = document.createElement('UL');

  data.map((el, i) => {
    if (data[i].isPublished === false) return;

    const postItem = document.createElement('LI');
    const postLink = document.createElement('A');
    const postTitle = document.createElement('H3');
    const postDescr = document.createElement('P');
    const postDate = document.createElement('TIME');
    const postTag = document.createElement('SPAN');
    const title = data[i].title.replace(/\d+_/g, '');
    const postPath = data[i].path.replace(/public\//g, '');

    postItem.classList.add('post-item');

    postLink.classList.add('post-link');
    postLink.href = postPath;

    postTitle.classList.add('post-title');
    postTitle.innerHTML = title;

    postDescr.classList.add('post-descr');
    postDescr.innerHTML = `${data[i].description}..`;

    postDate.classList.add('post-date');
    postDate.dateTime = data[i].date.replace(/(\d{1,2})\.(\d{1,2})\.(\d{4})/g, '$3-$2-$1');
    postDate.innerHTML = data[i].date;

    postTag.classList.add('post-tag');
    postTag.innerHTML = data[i].tag ? `#${data[i].tag}` : '';

    setTimeout(() => {
      postLink.appendChild(postTitle);
      postLink.appendChild(postDescr);
      postLink.appendChild(postDate);
      postLink.appendChild(postTag);

      postItem.appendChild(postLink);
      postList.appendChild(postItem);
    }, 1);
  });

  container.appendChild(postList);
};

fetch(
  '/posts.json',
)
  .then(response => response.json())
  .then(createPosts);
