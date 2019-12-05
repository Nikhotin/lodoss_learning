
/* eslint-disable max-len */
const _require = require('chai');

const { assert } = _require;

const oopTask1 = require('../src/OOP_task1');

describe('Модель успешно построена', () => {
  describe('Курс успешно создан', () => {
    it('Курс создан', () => {
      assert.isObject(oopTask1);
      assert.isString(oopTask1.courseName);
      assert.isArray(oopTask1.theme);
    });
  });

  describe('Темы успешно добавлены', () => {
    it('Количество тем равно заданному количеству', () => {
      let themeAmount = oopTask1.theme.length;
      for (themeAmount; themeAmount > 0; themeAmount -= 1) {
        assert.isObject(oopTask1.theme[themeAmount - 1]);
        assert.isString(oopTask1.theme[themeAmount - 1].themeName);
        assert.isArray(oopTask1.theme[themeAmount - 1].question);
      }
    });
  });

  describe('Вопросы успешно добавлены', () => {
    it('Количество вопросов равно заданному количеству', () => {
      let themeAmount = oopTask1.theme.length;
      for (themeAmount; themeAmount > 0; themeAmount -= 1) {
        let questionAmount = oopTask1.theme[themeAmount - 1].question.length;
        for (questionAmount; questionAmount > 0; questionAmount -= 1) {
          assert.isObject(oopTask1.theme[themeAmount - 1].question[questionAmount - 1]);
          assert.isString(oopTask1.theme[themeAmount - 1].question[questionAmount - 1].questionName);
          assert.isArray(oopTask1.theme[themeAmount - 1].question[questionAmount - 1].answer);
        }
      }
    });
  });

  describe('Ответы успешно добавлены', () => {
    it('В каждом вопросе есть хотя бы один правильный ответ', () => {
      let themeAmount = oopTask1.theme.length;
      for (themeAmount; themeAmount > 0; themeAmount -= 1) {
        let questionAmount = oopTask1.theme[themeAmount - 1].question.length;
        for (questionAmount; questionAmount > 0; questionAmount -= 1) {
          let answerAmount = oopTask1.theme[themeAmount - 1].question[questionAmount - 1].answer.length;
          for (answerAmount; answerAmount > 0; answerAmount -= 1) {
            assert.isString(oopTask1.theme[themeAmount - 1].question[questionAmount - 1].answer[answerAmount - 1].answerName);
            assert.isBoolean(oopTask1.theme[themeAmount - 1].question[questionAmount - 1].answer[answerAmount - 1].correct);
          }
        }
      }
    });
  });
});
