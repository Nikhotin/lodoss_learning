'use strict';

var assert = require('chai').assert;
var jsTask3 = require('../src/js_sync_task3');

describe("catsGroupGenerate", function () {

    describe("Соответствие количества элементов массива параметру функции", function () {
        function makeTestEqualAmount(n) {
            var a = jsTask3.catsGroupGenerate(n).length;

            it("Количество элементов массива соответствует параметру функции", function () {
                assert.equal(a, n);
            });
        }

        for (var x = 10; x >= 1; x--) {
            makeTestEqualAmount(x);
        }
    });
});