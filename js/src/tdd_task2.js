let _js_task1 = require('./js_sync_task1');

var name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
var age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gender = ['M', 'W'];
var legsCount = [2, 3, 4];
var tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];
var loudness = ['quiet', 'medium', 'loud'];

function catFactory() {
    let catName = _js_task1.pick(name);
    let catAge = _js_task1.pick(age);
    let catGender = _js_task1.pick(gender);
    let catLegsCount = _js_task1.pick(legsCount);
    let catTailLength = _js_task1.pick(tailLength);
    let catLoudness = _js_task1.pick(loudness);
    let randomCat = {
        name: catName,
        age: catAge,
        gender: catGender,
        legsCount: catLegsCount,
        tailLength: catTailLength,
        loudness: catLoudness,
    };
    return randomCat
}

exports.name = name;
exports.age = age;
exports.gender = gender;
exports.legsCount = legsCount;
exports.tailLength = tailLength;
exports.loudness = loudness;
module.exports.catFactory = catFactory;
