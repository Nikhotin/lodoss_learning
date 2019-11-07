export {catFactory};
export {name, age, gender, legsCount, tailLength};

import {pick} from './js_sync_task1';


let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];

function catFactory() {
    let catName = pick(name)
    let catAge = pick(age)
    let catGender = pick(gender)
    let catLegsCount = pick(legsCount)
    let catTailLength = pick(tailLength)
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