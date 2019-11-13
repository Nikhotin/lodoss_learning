const assert = require('chai').assert;
const jsTask1 = require('../src/js_sync_task1');

describe("Pick", function() {

    describe("Если массив пустой", function() {
        it("Функция выдает Undefined", function() {
            assert.isUndefined(jsTask1.pick([]));
        });

    });

    describe("Если массив не пустой", function() {
        it("Функция выдает какое-то значение", function() {
            assert.isDefined(jsTask1.pick([1, 2, 3, 4, 5, 6]));
        });
    });
   
    describe("Принадлежность результата функции исходному массиву", function() {
        it("Функция выдает значение принадлежащее исходному массиву", function() {
            for (let x = 1; x <= 5; x++) {
                assert.include([1,2,3,4,5,6], jsTask1.pick([1, 2, 3, 4, 5, 6]));
            }
        });
    
    });

});
