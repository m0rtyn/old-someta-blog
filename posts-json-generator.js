// const PATH = require('path');
const fs = require('fs');
const dirTree = require('directory-tree');

const posts = [];
const tree = dirTree('./public/posts/', {}, null, (item) => {
  // console.log(item);
  item.children.map((element) => {
    // console.log(element.name);
    let title = '';
    fs.readFile(element.path, 'utf8', (err, data) => {
      if (err) throw err;

      title = data.match(/(?!<h1>)[а-яa-z0-9\s#]+(?=<\/h1>)/ig) || [];
      element.title = title[0];

      const description = data.match(/(?!<p>)([a-zа-я0-9ё.—\-/,«»:\s]+\n?)(?=<\/p>)/i) || [];
      element.description = description[0];

      const date = data.match(/<!--date:([a-z0-9.\s]*)/i) || [];
      element.date = date[1];
      // console.log('date:', date[1]);

      const tag = data.match(/<!--tags:([a-z0-9_]*)/i) || [];
      element.tag = tag[1];
      // console.log('tag:', tag[1]);

      const isPublished = !!data.match(/<!--published/i);
      element.isPublished = isPublished;
    });
    posts.push(element);
  });
});


setTimeout(() => {
  console.log(posts);
  fs.writeFileSync('public/posts.json', JSON.stringify(posts));
}, 1000);
