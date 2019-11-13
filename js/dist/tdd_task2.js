'use strict';

var jsTask1 = require('./js_sync_task1');

var name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy', 'Albert', 'Pyshok'];
var age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gender = ['M', 'W'];
var legsCount = [2, 3, 4];
var tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];
var loudness = ['quiet', 'medium', 'loud'];

function catFactory() {
    var catName = jsTask1.pick(name);
    var catAge = jsTask1.pick(age);
    var catGender = jsTask1.pick(gender);
    var catLegsCount = jsTask1.pick(legsCount);
    var catTailLength = jsTask1.pick(tailLength);
    var catLoudness = jsTask1.pick(loudness);
    var randomCat = {
        name: catName,
        age: catAge,
        gender: catGender,
        legsCount: catLegsCount,
        tailLength: catTailLength,
        loudness: catLoudness
    };
    return randomCat;
}

module.exports = {
    catFactory: catFactory, name: name, age: age, gender: gender, legsCount: legsCount, tailLength: tailLength, loudness: loudness
};