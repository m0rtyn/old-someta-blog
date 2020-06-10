const fs = require('fs');

const filePath = process.argv.slice(2, 3)[0];

fs.readFile(filePath, 'utf8', async (err, data) => {
  const title = data.match(/title: (.*)/)[1].toUpperCase();
  const description = data.match(/description: (.*)/)[1];
  const withoutFrontmatter = await data.replace(/---(\n.*)+---/g, '');
  const formatted = await withoutFrontmatter.replace(/### (.+)/g, '**$1**');
  const text = `**${title}**\n\n${description}\n${formatted}`;

  console.log(text);
  fs.writeFile('./temp.md', text, 'utf8', (e) => {
    if (e) throw e;
    console.log('The file has been saved!');
  });
});