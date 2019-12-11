const { assert } = require('chai');
const oopTask3 = require('../src/OOP_task3');

describe('Проверка методов классов Firm', () => {
  describe('Метод addDepartment(department)', () => {
    it('Метод добавляет параметр метода в свойсвтво departments класса Firm', () => {
      let a = { proj: [], staff: [] };
      oopTask3.google.addDepartment(a);
      assert.include(oopTask3.google.departments, a);
      a = 0;
      oopTask3.google.addDepartment(a);
      assert.include(oopTask3.google.departments, a);
      a = undefined;
      oopTask3.google.addDepartment(a);
      assert.include(oopTask3.google.departments, a);
      a = 'qq';
      oopTask3.google.addDepartment(a);
      assert.include(oopTask3.google.departments, a);
    });
  });

  describe('Метод getProject(min, max)', () => {
    it(`Метод создает от min до max экземпляров класса Project 
    и добавляет их в свойсвтво projects класса Firm`, () => {
      oopTask3.google.getProjects(125, 300);
      const projectsAmount = oopTask3.google.projects.length;
      assert.isAtMost(projectsAmount, 300);
      assert.isAtLeast(projectsAmount, 125);
      oopTask3.google.projects.forEach((proj) => {
        assert.isObject(proj);
      });
    });
  });

  describe('Метод hiringStaff(department)', () => {
    it(`Метод создает экземпляры класса Developer 
    и добавляет их в свойсвтво staff класса Department`, () => {
      oopTask3.mobileDepartment.projects = [];
      oopTask3.mobileDepartment.staff = [];
      oopTask3.mobileDepartment.projects.push(0);
      oopTask3.mobileDepartment.projects.push(0);
      oopTask3.mobileDepartment.projects.push(0);
      oopTask3.mobileDepartment.staff.push({ project: 0 });
      oopTask3.mobileDepartment.staff.push({ project: undefined });
      oopTask3.mobileDepartment.staff.push({ project: 0 });
      oopTask3.google.hiringStaff(oopTask3.mobileDepartment);
      const staffAmount = oopTask3.mobileDepartment.staff.length;
      assert.equal(staffAmount, 5);
    });
  });

  describe('Метод checkExistanceDeveloper(department)', () => {
    it(`Метод передеает проекты из firm.projects классу Department 
    в количестве равном количеству свободных разработчиков`, () => {
    });
  });
});

describe('Проверка методов классов Department', () => {
  describe('Метод sendProjectToTest(department)', () => {
    it(`Передает все проекты, у которых свойство made 
    является true, в депортамент тестировки`, () => {
    });
  });

  describe('Метод giveProjectToStaff()', () => {
    it(`Метод передает каждому свободному разработчику 
    первый элемент массива проектов класса Department`, () => {
    });
  });

  describe('Метод organizeWork()', () => {
    it('Метод в зависимости от депортамента организовывает дневную работу сотрудников', () => {
    });
  });

  describe('Метод dismissUselessDeveloper()', () => {
    it(`Метод удаляет самого неопытного разработчика, у которого не было проекта 
    от 3 и более дней, если такого нет, возвращает null`, () => {
    });
  });
});
