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

const createHTML = async (dataPath, templatePath, outputPath) => {
  const template = await readfile(templatePath);
  const data = await readfile(dataPath);
  const output = mustache.render(template, JSON.parse(data));
  writefile(outputPath, output);
};

createHTML('./data.json', './template.txt', 'output.html');
