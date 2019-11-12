const assert = require('chai').assert;
const jsTask4 = require('../src/js_sync_task4');


describe("findGenderM", function() {

    describe("Принадлежат ли все отсортированные коты гендеру М", function() {
        
        it("Все отсортированные элементы принадлежат гендеру M", function() {
            let result = jsTask4.findGenderM(jsTask4.catsArr);

            result.forEach(function(value){
                assert.equal(value.gender, 'M');
            });

        });

    });

});

describe("findGenderW", function() {

    describe("Принадлежат ли все отсортированные коты гендеру W", function() {
        
        it("Все отсортированные элементы принадлежат гендеру W", function() {
            let result = jsTask4.findGenderW(jsTask4.catsArr);
    
            result.forEach(function(value){
                assert.equal(value.gender, 'W');
            });

        });
    
    });

});

describe("getNames", function() {

    describe("Количество имен соответствует количеству элементов массива", function() {
        
        it("Количества совпадают", function() {
            let result = jsTask4.getNames(jsTask4.catsArr);
            let counter = jsTask4.catsArr.length;

            assert.equal(result.length, counter);

        });
    
    });

    describe("Отобранные имена соответствуют именам в массиве объектов", function() {
        
        it("Имена совпали", function() {
            let result = jsTask4.getNames(jsTask4.catsArr);
            let counter = result.length;
    
            while(counter > 0){
                let a = jsTask4.catsArr[counter-1];
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
                let result = jsTask4.oldestCatsM(jsTask4.catsArr, n);
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
                let result = jsTask4.youngestCatsW(jsTask4.catsArr, n);
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