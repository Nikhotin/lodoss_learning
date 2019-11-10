var assert = require('chai').assert;
var _js_task2 = require('../src/js_sync_task2');


describe("catFactory", function() {

    describe("Принадлежность свойств объекта к элементам словаря", function() {

        it("Свойство catName принадлежит массиву name", function() {
            let a = _js_task2.catFactory();
            assert.include(_js_task2.name, a.name);
        });
        it("Свойство catAge принадлежит массиву age", function() {
            let a = _js_task2.catFactory();
            assert.include(_js_task2.age, a.age);
        });
        it("Свойство catGender принадлежит массиву gender", function() {
            let a = _js_task2.catFactory();
            assert.include(_js_task2.gender, a.gender);
        });
        it("Свойство catLegsCount принадлежит массиву legsCount", function() {
            let a = _js_task2.catFactory();
            assert.include(_js_task2.legsCount, a.legsCount);
        });
        it("Свойство catTailLength принадлежит массиву tailLength", function() {
            let a = _js_task2.catFactory();
            assert.include(_js_task2.tailLength, a.tailLength);
        });

    });
});
