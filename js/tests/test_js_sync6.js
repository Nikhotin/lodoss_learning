var assert = require('chai').assert;

let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];

function pick (list){
    let listLen = list.length;
    let position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
}
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

describe("catFactory(defaults)", function() {

    describe(`Проверка на совпадание свойств сгенерированных объектов
    с заданными параметрами`, function() {
        
        it("Свойства совпадают с параметрами", function() {
            let a = catFactory({name: 'Rizhik'});
            assert.equal(a.name, 'Rizhik');

            a = catFactory({age: 3});
            assert.equal(a.age, 3);

            a = catFactory({gender: 'M'});
            assert.equal(a.gender, 'M');

            a = catFactory({legsCount: 2});
            assert.equal(a.legsCount, 2);

            a = catFactory({tailLength: '20sm'});
            assert.equal(a.tailLength, '20sm');
        });
    });
});
