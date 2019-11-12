'use strict';

var assert = require('chai').assert;
var jsTask5 = require('../src/js_sync_task5');
var jsTask4 = require('../src/js_sync_task4');

describe("nameStats", function () {

    describe('\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u043C\u0435\u043D', function () {

        it("Количество уникальных имен совпадает с количеством объектов массива", function () {
            var a = Object.keys(jsTask5.nameStats());
            var set = new Set(jsTask4.getNames(jsTask4.catsArr));
            assert.equal(a.length, set.size);
        });
    });
});