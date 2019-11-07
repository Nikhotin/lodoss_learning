var assert = require('chai').assert;


function pick(list) {
    var listLen = list.length;
    var position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
}


describe("Pick", function() {

    describe("Если массив пустой", function() {
        it("Функция выдает Undefined", function() {
            assert.isUndefined(pick([]));
        });

    });

    describe("Если массив не пустой", function() {
        it("Функция выдает какое-то значение", function() {
            assert.isDefined(pick([1, 2, 3, 4, 5, 6]));
        });
    });
   
    describe("Принадлежность результата функции исходному массиву", function() {
        it("Функция выдает значение принадлежащее исходному массиву", function() {
            for (let x = 1; x <= 5; x++) {
                assert.include([1,2,3,4,5,6], pick([1, 2, 3, 4, 5, 6]));
            }
        });
    
    });

});
