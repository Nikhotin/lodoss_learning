const jsTask1 = require('./js_sync_task1');

let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];


function catFactory(defaults) {
    let catName;
    let catAge;
    let catGender;
    let catLegsCount;
    let catTailLength;

    catName = defaults.name || jsTask1.pick(name);
    catAge = defaults.age || jsTask1.pick(age);
    catGender = defaults.gender || jsTask1.pick(gender);
    catTailLength = defaults.tailLength || jsTask1.pick(tailLength);
    catLegsCount = defaults.legsCount || jsTask1.pick(legsCount);
   
    let randomCat = {
        name: catName,
        age: catAge,
        gender: catGender,
        legsCount: catLegsCount,
        tailLength: catTailLength,
    }
    return randomCat
}


module.exports = {
    catFactory, name, age, gender, legsCount, tailLength
}

