'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.catsArr = exports.youngestCatsW = exports.oldestCatsM = exports.getNames = exports.findGenderW = exports.findGenderM = undefined;

var _js_sync_task = require('./js_sync_task3');

exports.findGenderM = findGenderM;
exports.findGenderW = findGenderW;
exports.getNames = getNames;
exports.oldestCatsM = oldestCatsM;
exports.youngestCatsW = youngestCatsW;
exports.catsArr = catsArr;


var catsArr = (0, _js_sync_task.catsGroupGenerate)(999);

function findGenderM(catsArr) {
    var findObj = { gender: 'M' };

    var result = catsArr.filter(function (cat) {
        return Object.keys(findObj).every(function (key) {
            return cat[key] === findObj[key];
        });
    });

    return result;
}

function findGenderW(catsArr) {
    var findObj = { gender: 'W' };

    var result = catsArr.filter(function (cat) {
        return Object.keys(findObj).every(function (key) {
            return cat[key] === findObj[key];
        });
    });

    return result;
}

function getNames(catsArr) {
    var catsNames = [];

    catsArr.forEach(function (item) {
        var catName = Object.values(item)[0];
        catsNames.push(catName);
    });

    return catsNames;
}

function oldestCatsM(catsArr, n) {
    var oldestCatsList = [];
    var findObj = { gender: 'M' };

    var result = catsArr.filter(function (cat) {
        return Object.keys(findObj).every(function (key) {
            return cat[key] === findObj[key];
        });
    });

    var catSort = result.sort(function (a, b) {
        return b.age - a.age;
    });

    while (n > 0) {
        var oldCat = catSort.shift();
        oldestCatsList.push(oldCat);
        n--;
    }

    return oldestCatsList;
}

function youngestCatsW(catsArr, n) {
    var youngestCatsList = [];
    var findObj = { gender: 'W' };

    var result = catsArr.filter(function (cat) {
        return Object.keys(findObj).every(function (key) {
            return cat[key] === findObj[key];
        });
    });

    var catSort = result.sort(function (a, b) {
        return b.age - a.age;
    });

    while (n > 0) {
        var oldCat = catSort.pop();
        youngestCatsList.push(oldCat);
        n--;
    }

    return youngestCatsList;
}

console.log(catsArr);
console.log(findGenderM(catsArr));
console.log(getNames(catsArr));
console.log(oldestCatsM(catsArr, 10));
console.log(youngestCatsW(catsArr, 10));