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
  let data;
  let template;
  let output;

  readfile(templatePath).then((content) => {
    template = content;
  });
  readfile(dataPath).then((content) => {
    JSON.parse(content);
    data = content;
  });
  output = mustache.render(template, data);
  writefile(outputPath, output);
}

// function createHtml(dataPath, templatePath, outputPath) {
//   let data;
//   let template;
//   let output;

//   return new Promise((resolve, reject) => {
//     resolve(console.log('Lets started'));
//     readfile(templatePath).then((content) => {
//       template = content;
//       return template;
//     });
//   }).then(() => {
//     readfile(dataPath).then((content) => {
//       JSON.parse(content);
//       data = content;
//       return data;
//     }).then(() => {
//       output = mustache.render(template, data);
//       return output;
//     }).then(() => {
//       writefile(outputPath, output);
//     });
//   });
// }

createHtml('./data.json', './template.txt', './output.html');
