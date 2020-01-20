/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const mustache = require('mustache');


function createHtml(dataPath, templatePath, outputPath, callback) {
  let data;
  let template;
  fs.readFile(dataPath, 'UTF8', (err, res) => {
    if (err) {
      callback(err);
      console.log(`Error: ${err}`);
    } else {
      data = res;
      fs.readFile(templatePath, 'UTF8', (err, res) => {
        if (err) {
          console.log(`Error: ${err}`);
          callback(err);
        } else {
          template = res;
          const output = mustache.render(template, JSON.parse(data));
          fs.writeFile(outputPath, output, 'utf8', (err) => {
            console.log('The file has been saved');
            callback(err);
          });
        }
      });
    }
  });
}

function check(err) {
  if (err) console.log(`Error: ${err}`);
}


createHtml('./data.json', './template.txt', './output.html', check);
