const fs = require('fs');

const filePath = process.argv.slice(2, 3)[0];

const generatePostContent = postName => {
  const url = `https://someta.site/${postName}/`;

  return url;
};

const generateNoteContent = (text, title) => {
  return `**${title}**${text}`;
};

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;

  const postNameString = filePath.match(
    /_inProgress\/(.*)(\.md|mdx)/
  );
  const postName = postNameString[1];

  const title = data.match(/title: (.*)/)[1].toUpperCase();
  const textWithoutMetaData = data.replace(/---(\n.*)+---/g, '');
  const formattedText = textWithoutMetaData.replace(
    /## (.+)/g,
    '**$1**'
  );

  const isLongText = formattedText.length > 600;

  const dest = isLongText ? 'posts/' : 'notes/';
  const content = isLongText
    ? generatePostContent(postName)
    : generateNoteContent(formattedText, title);

  fs.writeFile('./temp.md', content, 'utf8', e => {
    if (e) throw e;

    console.info('The file has been writed to temp folder!');
  });

  fs.writeFile(`${dest}${postName}.md`, data, 'utf8', e => {
    if (e) throw e;

    console.info('The file has been replaced to published texts!');
  });

  fs.unlink(filePath, e => {
    if (e) throw e;

    console.info('The file was deleted');
  });
});
