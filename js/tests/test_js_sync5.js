const assert = require('chai').assert;
const jsTask5 = require('../src/js_sync_task5');
const jsTask4 = require('../src/js_sync_task4');


describe("nameStats", function() {

    describe(`Проверка на количество уникальных имен`, function() {
        
        it("Количество уникальных имен совпадает с количеством объектов массива", function() {
           let a = Object.keys(jsTask5.nameStats());
           let set = new Set(jsTask4.getNames(jsTask4.catsArr));
           assert.equal(a.length, set.size);
        });
    });
});
