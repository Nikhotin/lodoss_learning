'use strict';

var _require = require('chai'),
    assert = _require.assert;

var jsTask2 = require('../src/js_sync_task2');

describe('catFactory', function () {
  describe('Принадлежность свойств объекта к элементам словаря', function () {
    it('Свойство catName принадлежит массиву name', function () {
      var a = jsTask2.catFactory();
      assert.include(jsTask2.name, a.name);
    });
    it('Свойство catAge принадлежит массиву age', function () {
      var a = jsTask2.catFactory();
      assert.include(jsTask2.age, a.age);
    });
    it('Свойство catGender принадлежит массиву gender', function () {
      var a = jsTask2.catFactory();
      assert.include(jsTask2.gender, a.gender);
    });
    it('Свойство catLegsCount принадлежит массиву legsCount', function () {
      var a = jsTask2.catFactory();
      assert.include(jsTask2.legsCount, a.legsCount);
    });
    it('Свойство catTailLength принадлежит массиву tailLength', function () {
      var a = jsTask2.catFactory();
      assert.include(jsTask2.tailLength, a.tailLength);
    });
  });
});