var assert = require('chai').assert;
var _js_task5 = require('../src/js_sync_task5');
var _js_task4 = require('../src/js_sync_task4');


describe("nameStats", function() {

    describe(`Проверка на количество уникальных имен`, function() {
        
        it("Количество уникальных имен совпадает с количеством объектов массива", function() {
           let a = _js_task5.nameStats(_js_task4.catsArr);
           let set = new Set(_js_task4.getNames(_js_task4.catsArr));
           assert.equal(a.length, set.size);
        });
    });
});
