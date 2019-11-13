'use strict';

var assert = require('chai').assert;
var jsTask6 = require('../src/js_sync_task6');

describe("catFactory(defaults)", function () {

    describe('\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432\n    \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438', function () {

        it("Свойства совпадают с параметрами", function () {
            var a = jsTask6.catFactory({ name: 'Rizhik' });
            assert.equal(a.name, 'Rizhik');

            a = jsTask6.catFactory({ age: 3 });
            assert.equal(a.age, 3);

            a = jsTask6.catFactory({ gender: 'M' });
            assert.equal(a.gender, 'M');

            a = jsTask6.catFactory({ legsCount: 2 });
            assert.equal(a.legsCount, 2);

            a = jsTask6.catFactory({ tailLength: '20sm' });
            assert.equal(a.tailLength, '20sm');
        });
    });
});