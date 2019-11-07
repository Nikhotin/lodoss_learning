var assert = require('chai').assert;

let name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy','Albert', 'Pyshok'];
let age = ['Less than a year', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gender = ['M', 'W'];
let legsCount = [2, 3, 4];
let tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];

function pick (list){
    let listLen = list.length;
    let position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
}
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
function catsGroupGenerate (n){
    let catList = [];
    let cat = catFactory();
    while (n>0){
        catList.push(cat);
        n--;
    }
    return catList
}


describe("catsGroupGenerate", function() {

    describe("Соответствие количества элементов массива параметру функции", function() {
        function makeTestEqualAmount(n){
            let a = catsGroupGenerate(n).length;

            it("Количество элементов массива соответствует параметру функции", function() {
                assert.equal(a, n);
            });
        }

        for (let x = 10; x >= 1; x--) {
            makeTestEqualAmount(x);
        }

    });

});
