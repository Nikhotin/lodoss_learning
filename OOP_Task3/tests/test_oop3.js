const { assert } = require('chai');
const oopTask3 = require('../src/OOP_task3');

describe('Проверка методов классов Firm', () => {
  describe('Метод addDepartment(department)', () => {
    it('Метод добавляет новый депортамент в свойсвтво department класса Firm', () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод getProject(min, max)', () => {
    it(`Метод создает от min до max экземпляров класса Project 
    и добавляет их в свойсвтво projects класса Firm`, () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод hiringStaff(department)', () => {
    it(`Метод создает экземпляры класса Developer 
    и добавляет их в свойсвтво staff класса Department`, () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод checkExistanceDeveloper(department)', () => {
    it(`Метод передеает проекты из firm.projects классу Department 
    в количестве равном количеству свободных разработчиков`, () => {
      assert.isObject(oopTask3);
    });
  });
});

describe('Проверка методов классов Department', () => {
  describe('Метод sendProjectToTest(department)', () => {
    it(`Передает все проекты, у которых свойство made 
    является true, в депортамент тестировки`, () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод giveProjectToStaff()', () => {
    it(`Метод передает каждому свободному разработчику 
    первый элемент массива проектов класса Department`, () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод organizeWork()', () => {
    it('', () => {
      assert.isObject(oopTask3);
    });
  });

  describe('Метод dismissUselessDeveloper()', () => {
    it(`Метод удаляет самого неопытного разработчика, у которого не было проекта 
    от 3 и более дней, если такого нет, возвращает null`, () => {
      assert.isObject(oopTask3);
    });
  });
});
