export {catFactory};
export {name, age, gender, legsCount, tailLength};

import {pick} from './js_sync_task1';


let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = ['Less than a year', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];


function catFactory(defaults) {
    let catName;
    let catAge;
    let catGender;
    let catLegsCount;
    let catTailLength;

    if( defaults.name === undefined){
        cat_name = pick(name)
    } else {
        catName = defaults.name
    }

    if( defaults.age === undefined){
        catAge = pick(age)
    } else {
        catAge = defaults.age
    }

    if( defaults.gender === undefined){
        catGender = pick(gender)
    } else {
        catGender = defaults.gender
    }

    if( defaults.legsCount === undefined){
        catLegsCount = pick(legsCount)
    } else {
        catLegsCount = defaults.legsCount
    }

    if( defaults.tailLength === undefined){
        catTailLength = pick(tailLength)
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

console.log(catFactory())