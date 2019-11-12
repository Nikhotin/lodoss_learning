const jsTask1 = require('./js_sync_task1');

let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];
let loudness = ['quiet', 'medium', 'loud'];

function catFactory() {
    let catName = jsTask1.pick(name);
    let catAge = jsTask1.pick(age);
    let catGender = jsTask1.pick(gender);
    let catLegsCount = jsTask1.pick(legsCount);
    let catTailLength = jsTask1.pick(tailLength);
    let catLoudness = jsTask1.pick(loudness);
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

module.exports = {
    catFactory, name, age, gender, legsCount, tailLength, loudness
}
