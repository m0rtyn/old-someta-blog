// const PATH = require('path');
const fs = require('fs');
const dirTree = require('directory-tree');

const posts = [];
const tree = dirTree('./public/posts/', {}, null, (item, PATH, stats) => {
  // console.log(item.children);
  item.children.map((element) => {
    let title = '';
    fs.readFile(element.path, 'utf8', (err, data) => {
      if (err) throw err;

      title = data.match(/(?!<h1>)[а-яa-z0-9\s#]+(?=<\/h1>)/ig) || [];
      // console.log(title);
      element.title = title[0];

      const description = data.match(/(?!<p>)([a-zа-я0-9ё.—\-/,«»:\s]+\n?)(?=<\/p>)/i) || [];
      // console.log(description[0]);
      element.description = description[0];

      const date = data.match(/<!--date:([a-z0-9.\s]*)/i) || [];
      element.date = date[1];
      console.log('date:', date[1]);

      const tag = data.match(/<!--tags:([a-z0-9]*)/i) || [];
      element.tag = tag[1];
      console.log('tag:', tag[1]);

      const isPublished = !!data.match(/<!--published/i);
      element.isPublished = isPublished;

      posts.push(element);
    });
  });
});

setTimeout(() => {
  fs.writeFileSync('public/posts.json', JSON.stringify(posts));
}, 1000);
