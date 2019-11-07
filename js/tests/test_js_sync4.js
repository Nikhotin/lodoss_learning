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

function findGenderM(catsArr){
    let result = catsArr.filter(cat => cat.gender == 'M');

    return result
}

function findGenderW(catsArr){
    let result = catsArr.filter(cat => cat.gender == 'W');

    return result
}

function getNames(catsArr){
    let catsNames = [];
     
    catsArr.forEach(function(item){
            let catName = Object.values(item)[0];
            catsNames.push(catName);
    }); 
    
    return catsNames
}

function oldestCatsM(catsArr, n){
    let oldestCatsList = [];
    let result = catsArr.filter(cat => cat.gender == 'M');
    let catSort = result.sort((a, b) => b.age - a.age);
    oldestCatsList = catSort.slice(0, n);

    return oldestCatsList
}

function youngestCatsW(catsArr, n){
    let youngestCatsList = [];
    let result = catsArr.filter(cat => cat.gender == 'W');
    let catSort = result.sort((a, b) => a.age - b.age);
    youngestCatsList = catSort.slice(0, n);

    return youngestCatsList
}


describe("findGenderM", function() {

    describe("Принадлежат ли все отсортированные коты гендеру М", function() {
        
        it("Все отсортированные элементы принадлежат гендеру M", function() {
            let result = findGenderM(catsArr);
            let counter = result.length;

            while(counter > 0){
                let a = result[counter-1];
                assert.equal(a.gender, 'M');
                counter--
            }
        });

    });

});

describe("findGenderW", function() {

    describe("Принадлежат ли все отсортированные коты гендеру W", function() {
        
        it("Все отсортированные элементы принадлежат гендеру W", function() {
            let result = findGenderW(catsArr);
            let counter = result.length;
    
            while(counter > 0){
                let a = result[counter-1];
                assert.equal(a.gender, 'W');
                counter--
            }
        });
    
    });

});

describe("getNames", function() {

    describe("Количество имен соответствует количеству элементов массива", function() {
        
        it("Количества совпадают", function() {
            let result = getNames(catsArr);
            let counter = catsArr.length;

            assert.equal(result.length, counter);

        });
    
    });

    describe("Отобранные имена соответствуют именам в массиве объектов", function() {
        
        it("Имена совпали", function() {
            let result = getNames(catsArr);
            let counter = result.length;
    
            while(counter > 0){
                let a = catsArr[counter-1];
                assert.equal(a.name, result[counter-1]);
                counter--
            }
        });
    
    });

});

describe("oldestCatsM", function() {

    describe(`Отсортированные элементы расположены в порядке убывания возраста
    котов и их количество соответствует заданному параметру`, function() {
        
        it("Элементы расположены в нужном порядке и их количество верно", function() {
            let n = 25;
            while(n > 0) {
                let result = oldestCatsM(catsArr, n);
                let counter = result.length;

                assert.equal(counter, n);
    
                while(counter > 1){
                    let a = result[counter-2];
                    let b = result[counter-1];
                    
                    assert.isAtLeast(a.age, b.age);
                    counter--
                }
                n--
            }
            
        });
    
    });

});

describe("youngestCatW", function() {

    describe(`Отсортированные элементы расположены в порядке возрастания возраста
    кошек и их количество соответствует заданному параметру`, function() {
        
        it("Элементы расположены в нужном порядке и их количество верно", function() {
            let n = 25;
            while(n > 0) {
                let result = youngestCatsW(catsArr, n);
                let counter = result.length;

                assert.equal(counter, n);
    
                while(counter > 1){
                    let a = result[counter-2];
                    let b = result[counter-1];

                    assert.isAtMost(a.age, b.age);
                    counter--
                }
                n--
            }
            
        });
    
    });

});