const fs = require('fs');

// call by shell script as `node postToTelegram.js $FILE_PATH`
const filePath = process.argv[2];

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

  const title = data.match(/title: (.*)/)[1].toUpperCase(); // replace title and MAKE BIG

  const textWithoutMetaData = data.replace(/---(\n.*)+---/g, ''); // remove metadata

  const formattedText = textWithoutMetaData.replace(
    /## (.+)/g,
    '**$1**'
  ); // replace markdown titles by bold text

  // const isLongText = formattedText.length > 600;

  // const destFolder = isLongText ? 'posts' : 'notes';
  const destFolder = 'notes';

  const content = generateNoteContent(formattedText, title);
  // const content = isLongText
  //   ? generatePostContent(postName)
  //   : generateNoteContent(formattedText, title);

  fs.writeFile('./temp.md', content, 'utf8', e => {
    if (e) throw e;

    console.info('The file has been writed to temp folder!');
  });

  const destPath = `./${destFolder}/${postName}.md`;

  fs.appendFile(destPath, data, 'utf-8', e => {
    if (e) throw e;

    console.info('The file has been replaced to published texts!');
  });

  fs.writeFile(destPath, data, 'utf8', e => {
    if (e) throw e;

    console.info('The file has been replaced to published texts!');
  });

  // fs.unlink(filePath, e => {
  //   if (e) throw e;

  //   console.info('The file was deleted');
  // });
});
