/* eslint-env browser */

const createPosts = (data) => {
  const rootElement = document.getElementById('posts-kanban');
  const container = document.getElementsByClassName('container')[0];
  const columnDraft = document.getElementsByClassName('column-draft')[0];
  const columnPublished = document.getElementsByClassName('column-published')[0];
  // const postList = document.getElementsByClassName('post-list');

  data.map((el, i) => {
    const column = data[i].status
      ? columnPublished
      : columnDraft;
    const postItem = document.createElement('LI');
    const postTitle = document.createElement('P');
    const title = data[i].title.replace(/\d+_/g, '');
    const { platforms } = data[i];

    postTitle.innerHTML = title;

    setTimeout(() => {
      postItem.appendChild(postTitle);
      column
        .getElementsByClassName('post-list')[0]
        .appendChild(postItem)
        .innerHTML += platforms || '';
    }, 1);
  });

  container.appendChild(columnDraft);
  container.appendChild(columnPublished);
  rootElement.appendChild(container);
};

fetch(
  '/posts.json',
)
  .then(response => response.json())
  .then(createPosts);
