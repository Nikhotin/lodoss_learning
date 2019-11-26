const { assert } = require('chai');
const jsTask2 = require('../src/js_sync_task2');


describe('catFactory', () => {
  describe('Принадлежность свойств объекта к элементам словаря', () => {
    it('Свойство catName принадлежит массиву name', () => {
      const a = jsTask2.catFactory();
      assert.include(jsTask2.name, a.name);
    });
    it('Свойство catAge принадлежит массиву age', () => {
      const a = jsTask2.catFactory();
      assert.include(jsTask2.age, a.age);
    });
    it('Свойство catGender принадлежит массиву gender', () => {
      const a = jsTask2.catFactory();
      assert.include(jsTask2.gender, a.gender);
    });
    it('Свойство catLegsCount принадлежит массиву legsCount', () => {
      const a = jsTask2.catFactory();
      assert.include(jsTask2.legsCount, a.legsCount);
    });
    it('Свойство catTailLength принадлежит массиву tailLength', () => {
      const a = jsTask2.catFactory();
      assert.include(jsTask2.tailLength, a.tailLength);
    });
  });
});
