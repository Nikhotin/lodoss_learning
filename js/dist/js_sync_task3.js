'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.catsGroupGenerate = undefined;

var _js_sync_task = require('./js_sync_task2');

exports.catsGroupGenerate = catsGroupGenerate;


function catsGroupGenerate(n) {
    var catList = [];
    var cat = (0, _js_sync_task.catFactory)();
    while (n > 0) {
        catList.push(cat);
        n--;
    }
    return catList;
}
console.log(catsGroupGenerate(5));