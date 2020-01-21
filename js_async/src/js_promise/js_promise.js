/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const mustache = require('mustache');


function readfile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'UTF8', (err, result) => {
      if (err) reject(console.log(err));
      resolve(result);
    });
  });
}

function writefile(path, out) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, out, 'UTF8', (err) => {
      if (err) reject(console.log(err));
      resolve(console.log('The file has been saved'));
    });
  });
}

function createHtml(dataPath, templatePath, outputPath) {
  let template;
  return Promise
    .resolve()
    .then(() => readfile(templatePath))
    .then((_template) => {
      template = _template;
      return readfile(dataPath);
    })
    .then((data) => mustache.render(template, JSON.parse(data)))
    .then((output) => {
      writefile(outputPath, output);
    });
}

createHtml('./data.json', './template.txt', './output.html');
