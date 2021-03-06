const { assert } = require('chai');
const jsTask6 = require('../src/js_sync_task6');

describe('catFactory(defaults)', () => {
  describe(`Проверка на совпадание свойств сгенерированных объектов
    с заданными параметрами`, () => {
    it('Свойства совпадают с параметрами', () => {
      let a = jsTask6.catFactory({ name: 'Rizhik' });
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
