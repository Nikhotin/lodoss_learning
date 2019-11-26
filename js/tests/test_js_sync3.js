const { assert } = require('chai');
const jsTask3 = require('../src/js_sync_task3');

describe('catsGroupGenerate', () => {
  describe('Соответствие количества элементов массива параметру функции', () => {
    function makeTestEqualAmount(n) {
      const a = jsTask3.catsGroupGenerate(n).length;

      it('Количество элементов массива соответствует параметру функции', () => {
        assert.equal(a, n);
      });
    }

    for (let x = 10; x >= 1; x -= 1) {
      makeTestEqualAmount(x);
    }
  });
});
