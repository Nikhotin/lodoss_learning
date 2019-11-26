'use strict';

var jsTask4 = require('./js_sync_task4');

function nameStats() {
  var namesList = jsTask4.getNames(jsTask4.catsArr);
  var catAmount = {};

  namesList.forEach(function (elem) {
    if (Object.keys(catAmount).join(';').includes(elem)) {
      catAmount[elem] += 1;
    } else {
      catAmount[elem] = 1;
    }
  });

  return catAmount;
}

module.exports = {
  nameStats: nameStats
};