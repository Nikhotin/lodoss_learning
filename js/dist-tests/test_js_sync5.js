'use strict';

var _require = require('chai'),
    assert = _require.assert;

var jsTask5 = require('../src/js_sync_task5');
var jsTask4 = require('../src/js_sync_task4');

describe('nameStats', function () {
  describe('Проверка на количество уникальных имен', function () {
    it('Количество уникальных имен совпадает с количеством объектов массива', function () {
      var a = Object.keys(jsTask5.nameStats());
      var set = new Set(jsTask4.getNames(jsTask4.catsArr));
      assert.equal(a.length, set.size);
    });
  });
});