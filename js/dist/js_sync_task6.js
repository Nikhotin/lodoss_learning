'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tailLength = exports.legsCount = exports.gender = exports.age = exports.name = exports.catFactory = undefined;

var _js_sync_task = require('./js_sync_task1');

exports.catFactory = catFactory;
exports.name = name;
exports.age = age;
exports.gender = gender;
exports.legsCount = legsCount;
exports.tailLength = tailLength;


var name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy', 'Albert', 'Pyshok'];
var age = ['Less than a year', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gender = ['M', 'W'];
var legsCount = [2, 3, 4];
var tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];

function catFactory(defaults) {
    var catName = void 0;
    var catAge = void 0;
    var catGender = void 0;
    var catLegsCount = void 0;
    var catTailLength = void 0;

    if (defaults.name === undefined) {
        cat_name = (0, _js_sync_task.pick)(name);
    } else {
        catName = defaults.name;
    }

    if (defaults.age === undefined) {
        catAge = (0, _js_sync_task.pick)(age);
    } else {
        catAge = defaults.age;
    }

    if (defaults.gender === undefined) {
        catGender = (0, _js_sync_task.pick)(gender);
    } else {
        catGender = defaults.gender;
    }

    if (defaults.legsCount === undefined) {
        catLegsCount = (0, _js_sync_task.pick)(legsCount);
    } else {
        catLegsCount = defaults.legsCount;
    }

    if (defaults.tailLength === undefined) {
        catTailLength = (0, _js_sync_task.pick)(tailLength);
    } else {
        catTailLength = defaults.tailLength;
    }

    var randomCat = {
        name: catName,
        age: catAge,
        gender: catGender,
        legsCount: catLegsCount,
        tailLength: catTailLength
    };
    return randomCat;
}

console.log(catFactory());