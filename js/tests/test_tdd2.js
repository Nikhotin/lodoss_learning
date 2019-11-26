const { assert } = require('chai');
const tddTask2 = require('../src/tdd_task2');


describe('catFactory', () => {
  describe('Принадлежность свойств объекта к элементам словаря', () => {
    it('Свойство catName принадлежит массиву name', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.name, a.name);
    });
    it('Свойство catAge принадлежит массиву age', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.age, a.age);
    });
    it('Свойство catGender принадлежит массиву gender', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.gender, a.gender);
    });
    it('Свойство catLegsCount принадлежит массиву legsCount', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.legsCount, a.legsCount);
    });
    it('Свойство catTailLength принадлежит массиву tailLength', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.tailLength, a.tailLength);
    });
    it('Свойство catLoudness принадлежит массиву loudness', () => {
      const a = tddTask2.catFactory();
      assert.include(tddTask2.loudness, a.loudness);
    });
  });
});
