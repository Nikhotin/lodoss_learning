var assert = require('chai').assert;
var _js_task6 = require('../src/js_sync_task6');

describe("catFactory(defaults)", function() {

    describe(`Проверка на совпадание свойств сгенерированных объектов
    с заданными параметрами`, function() {
        
        it("Свойства совпадают с параметрами", function() {
            let a = _js_task6.catFactory({name: 'Rizhik'});
            assert.equal(a.name, 'Rizhik');

            a = _js_task6.catFactory({age: 3});
            assert.equal(a.age, 3);

            a = _js_task6.catFactory({gender: 'M'});
            assert.equal(a.gender, 'M');

            a = _js_task6.catFactory({legsCount: 2});
            assert.equal(a.legsCount, 2);

            a = _js_task6.catFactory({tailLength: '20sm'});
            assert.equal(a.tailLength, '20sm');
        });
    });
});
