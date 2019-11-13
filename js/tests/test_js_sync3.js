const assert = require('chai').assert;
const jsTask3 = require('../src/js_sync_task3');

describe("catsGroupGenerate", function() {

    describe("Соответствие количества элементов массива параметру функции", function() {
        function makeTestEqualAmount(n){
            let a = jsTask3.catsGroupGenerate(n).length;

            it("Количество элементов массива соответствует параметру функции", function() {
                assert.equal(a, n);
            });
        }

        for (let x = 10; x >= 1; x--) {
            makeTestEqualAmount(x);
        }

    });

});
