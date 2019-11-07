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

    while (n>0){
        let cat = catFactory();
        catList.push(cat);
        n--;
    }
    return catList
}
let catsArr = catsGroupGenerate(999);
function getNames(catsArr){
    let catsNames = [];
     
    catsArr.forEach(function(item){
            let catName = Object.values(item)[0];
            catsNames.push(catName);
    }); 
    
    return catsNames
}
function nameStats (catsArr){
    let set = new Set(getNames(catsArr));
    let namesList = getNames(catsArr);
    let namesAmount = [];
    let catAmount = {};

    set.forEach(function(elem){
        let counter = 0;
        namesList.forEach(function(value){
            if(elem == value){
                counter++
            }
            return counter
        })

        catAmount = {
            Name: elem,
            Amount: counter
        };

        namesAmount.push(catAmount)
    })
   
    return namesAmount
}


describe("nameStats", function() {

    describe(`Проверка на количество уникальных имен`, function() {
        
        it("Количество уникальных имен совпадает с количеством объектов массива", function() {
           let a = nameStats(catsArr);
           let set = new Set(getNames(catsArr));
           assert.equal(a.length, set.size);
        });
    });
});
