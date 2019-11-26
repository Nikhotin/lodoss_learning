const { assert } = require('chai');
const jsTask1 = require('../src/js_sync_task1');

describe('Pick', () => {
  describe('Если массив пустой', () => {
    it('Функция выдает Undefined', () => {
      assert.isUndefined(jsTask1.pick([]));
    });
  });

  describe('Если массив не пустой', () => {
    it('Функция выдает какое-то значение', () => {
      assert.isDefined(jsTask1.pick([1, 2, 3, 4, 5, 6]));
    });
  });

  describe('Принадлежность результата функции исходному массиву', () => {
    it('Функция выдает значение принадлежащее исходному массиву', () => {
      for (let x = 1; x <= 5; x += 1) {
        assert.include([1, 2, 3, 4, 5, 6], jsTask1.pick([1, 2, 3, 4, 5, 6]));
      }
    });
  });
});
