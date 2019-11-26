'use strict';

var jsTask2 = require('./js_sync_task2');

function catsGroupGenerate(n) {
  var catList = [];
  var count = n;

  while (count > 0) {
    var cat = jsTask2.catFactory();
    catList.push(cat);
    count -= 1;
  }

  return catList;
}

module.exports = {
  catsGroupGenerate: catsGroupGenerate
};