'use strict';

var _require = require('chai'),
    assert = _require.assert;

var jsTask4 = require('../src/js_sync_task4');

describe('findGenderM', function () {
  describe('Принадлежат ли все отсортированные коты гендеру М', function () {
    it('Все отсортированные элементы принадлежат гендеру M', function () {
      var result = jsTask4.findGenderM(jsTask4.catsArr);

      result.forEach(function (value) {
        assert.equal(value.gender, 'M');
      });
    });
  });
});

describe('findGenderW', function () {
  describe('Принадлежат ли все отсортированные коты гендеру W', function () {
    it('Все отсортированные элементы принадлежат гендеру W', function () {
      var result = jsTask4.findGenderW(jsTask4.catsArr);

      result.forEach(function (value) {
        assert.equal(value.gender, 'W');
      });
    });
  });
});

describe('getNames', function () {
  describe('Количество имен соответствует количеству элементов массива', function () {
    it('Количества совпадают', function () {
      var result = jsTask4.getNames(jsTask4.catsArr);
      var counter = jsTask4.catsArr.length;

      assert.equal(result.length, counter);
    });
  });

  describe('Отобранные имена соответствуют именам в массиве объектов', function () {
    it('Имена совпали', function () {
      var result = jsTask4.getNames(jsTask4.catsArr);
      var counter = result.length;

      while (counter > 0) {
        var a = jsTask4.catsArr[counter - 1];
        assert.equal(a.name, result[counter - 1]);
        counter -= 1;
      }
    });
  });
});

describe('oldestCatsM', function () {
  describe('\u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\n    \u043A\u043E\u0442\u043E\u0432 \u0438 \u0438\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0443', function () {
    it('Элементы расположены в нужном порядке и их количество верно', function () {
      var n = 25;
      while (n > 0) {
        var result = jsTask4.oldestCatsM(jsTask4.catsArr, n);
        var counter = result.length;

        assert.equal(counter, n);

        while (counter > 1) {
          var a = result[counter - 2];
          var b = result[counter - 1];

          assert.isAtLeast(a.age, b.age);
          counter -= 1;
        }
        n -= 1;
      }
    });
  });
});

describe('youngestCatW', function () {
  describe('\u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\n    \u043A\u043E\u0448\u0435\u043A \u0438 \u0438\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0443', function () {
    it('Элементы расположены в нужном порядке и их количество верно', function () {
      var n = 25;
      while (n > 0) {
        var result = jsTask4.youngestCatsW(jsTask4.catsArr, n);
        var counter = result.length;

        assert.equal(counter, n);

        while (counter > 1) {
          var a = result[counter - 2];
          var b = result[counter - 1];

          assert.isAtMost(a.age, b.age);
          counter -= 1;
        }
        n -= 1;
      }
    });
  });
});