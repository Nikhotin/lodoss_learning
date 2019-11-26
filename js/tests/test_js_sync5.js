const { assert } = require('chai');
const jsTask5 = require('../src/js_sync_task5');
const jsTask4 = require('../src/js_sync_task4');


describe('nameStats', () => {
  describe('Проверка на количество уникальных имен', () => {
    it('Количество уникальных имен совпадает с количеством объектов массива', () => {
      const a = Object.keys(jsTask5.nameStats());
      const set = new Set(jsTask4.getNames(jsTask4.catsArr));
      assert.equal(a.length, set.size);
    });
  });
});
