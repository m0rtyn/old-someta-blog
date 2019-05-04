// const dirTree = require('directory-tree');

// const tree = dirTree('/src/markup/pages/posts');
// console.log(tree);
const PATH = require('path');
const fs = require('fs');
const dirTree = require('directory-tree');

const posts = [];
const tree = dirTree('./public/posts/', { normalizePath: true }, null, (item, PATH, stats) => {
  item.children.forEach((element) => {
    let title = '';
    fs.readFile(element.path, 'utf8', (err, data) => {
      if (err) throw err;
      title = data.match(/(?!<h1>)[а-яa-z0-9]+(?=<\/h1>)/ig);
      element.title = title[0];
      posts.push(element);
    });
  });
});

setTimeout(() => {
  fs.writeFileSync('public/posts.json', JSON.stringify(posts));
}, 1000);
