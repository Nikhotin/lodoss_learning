var assert = require('chai').assert;
var _js_task4 = require('../src/js_sync_task4');


describe("findGenderM", function() {

    describe("Принадлежат ли все отсортированные коты гендеру М", function() {
        
        it("Все отсортированные элементы принадлежат гендеру M", function() {
            let result = _js_task4.findGenderM(_js_task4.catsArr);
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
            let result = _js_task4.findGenderW(_js_task4.catsArr);
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
            let result = _js_task4.getNames(_js_task4.catsArr);
            let counter = _js_task4.catsArr.length;

            assert.equal(result.length, counter);

        });
    
    });

    describe("Отобранные имена соответствуют именам в массиве объектов", function() {
        
        it("Имена совпали", function() {
            let result = _js_task4.getNames(_js_task4.catsArr);
            let counter = result.length;
    
            while(counter > 0){
                let a = _js_task4.catsArr[counter-1];
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
                let result = _js_task4.oldestCatsM(_js_task4.catsArr, n);
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
                let result = _js_task4.youngestCatsW(_js_task4.catsArr, n);
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