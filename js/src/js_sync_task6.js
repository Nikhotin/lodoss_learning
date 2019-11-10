let _js_task1 = require('./js_sync_task1');

var name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
var age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gender = ['M', 'W'];
var legsCount = [2, 3, 4];
var tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];


function catFactory(defaults) {
    let catName;
    let catAge;
    let catGender;
    let catLegsCount;
    let catTailLength;
    
    if( defaults.name === undefined){
        catName = _js_task1.pick(name)
    } else {
        catName = defaults.name
    }
    
    if( defaults.age === undefined){
        catAge = _js_task1.pick(age)
    } else {
        catAge = defaults.age
    }
    
    if( defaults.gender === undefined){
        catGender = _js_task1.pick(gender)
    } else {
        catGender = defaults.gender
    }
    
    if( defaults.legsCount === undefined){
        catLegsCount = _js_task1.pick(legsCount)
    } else {
        catLegsCount = defaults.legsCount
    }
    
    if( defaults.tailLength === undefined){
        catTailLength = _js_task1.pick(tailLength)
    } else {
        catTailLength = defaults.tailLength
    }
    
    let randomCat = {
        name: catName,
        age: catAge,
        gender: catGender,
        legsCount: catLegsCount,
        tailLength: catTailLength,
    }
    return randomCat
}


module.exports.catFactory = catFactory;
exports.name = name;
exports.age = age;
exports.gender = gender;
exports.legsCount = legsCount;
exports.tailLength = tailLength;
