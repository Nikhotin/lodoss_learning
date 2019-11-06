'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nameStats = undefined;

var _js_sync_task = require('./js_sync_task4');

exports.nameStats = nameStats;


function nameStats(catsArr) {
    var set = new Set((0, _js_sync_task.getNames)(catsArr));
    var namesList = (0, _js_sync_task.getNames)(catsArr);
    var namesAmount = [];
    var catAmount = {};

    set.forEach(function (elem) {
        var counter = 0;
        namesList.forEach(function (value) {
            if (elem == value) {
                counter++;
            }
            return counter;
        });

        catAmount = {
            Name: elem,
            Amount: counter
        };

        namesAmount.push(catAmount);
    });

    return namesAmount;
}

console.log(nameStats(_js_sync_task.catsArr));