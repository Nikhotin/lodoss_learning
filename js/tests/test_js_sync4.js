const { assert } = require('chai');
const jsTask4 = require('../src/js_sync_task4');


describe('findGenderM', () => {
  describe('Принадлежат ли все отсортированные коты гендеру М', () => {
    it('Все отсортированные элементы принадлежат гендеру M', () => {
      const result = jsTask4.findGenderM(jsTask4.catsArr);

      result.forEach((value) => {
        assert.equal(value.gender, 'M');
      });
    });
  });
});

describe('findGenderW', () => {
  describe('Принадлежат ли все отсортированные коты гендеру W', () => {
    it('Все отсортированные элементы принадлежат гендеру W', () => {
      const result = jsTask4.findGenderW(jsTask4.catsArr);

      result.forEach((value) => {
        assert.equal(value.gender, 'W');
      });
    });
  });
});

describe('getNames', () => {
  describe('Количество имен соответствует количеству элементов массива', () => {
    it('Количества совпадают', () => {
      const result = jsTask4.getNames(jsTask4.catsArr);
      const counter = jsTask4.catsArr.length;

      assert.equal(result.length, counter);
    });
  });

  describe('Отобранные имена соответствуют именам в массиве объектов', () => {
    it('Имена совпали', () => {
      const result = jsTask4.getNames(jsTask4.catsArr);
      let counter = result.length;

      while (counter > 0) {
        const a = jsTask4.catsArr[counter - 1];
        assert.equal(a.name, result[counter - 1]);
        counter -= 1;
      }
    });
  });
});

describe('oldestCatsM', () => {
  describe(`Отсортированные элементы расположены в порядке убывания возраста
    котов и их количество соответствует заданному параметру`, () => {
    it('Элементы расположены в нужном порядке и их количество верно', () => {
      let n = 25;
      while (n > 0) {
        const result = jsTask4.oldestCatsM(jsTask4.catsArr, n);
        let counter = result.length;

        assert.equal(counter, n);

        while (counter > 1) {
          const a = result[counter - 2];
          const b = result[counter - 1];

          assert.isAtLeast(a.age, b.age);
          counter -= 1;
        }
        n -= 1;
      }
    });
  });
});

describe('youngestCatW', () => {
  describe(`Отсортированные элементы расположены в порядке возрастания возраста
    кошек и их количество соответствует заданному параметру`, () => {
    it('Элементы расположены в нужном порядке и их количество верно', () => {
      let n = 25;
      while (n > 0) {
        const result = jsTask4.youngestCatsW(jsTask4.catsArr, n);
        let counter = result.length;

        assert.equal(counter, n);

        while (counter > 1) {
          const a = result[counter - 2];
          const b = result[counter - 1];

          assert.isAtMost(a.age, b.age);
          counter -= 1;
        }
        n -= 1;
      }
    });
  });
});
