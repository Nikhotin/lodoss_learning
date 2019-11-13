'use strict';

var jsTask2 = require('./js_sync_task2');

function catsGroupGenerate(n) {
    var catList = [];

    while (n > 0) {
        var cat = jsTask2.catFactory();
        catList.push(cat);
        n--;
    }

    return catList;
}

module.exports = {
    catsGroupGenerate: catsGroupGenerate
};