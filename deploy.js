const ghPages = require('gh-pages');

ghPages.publish('public', {
  branch: 'master',
}, err => console.log(err));
