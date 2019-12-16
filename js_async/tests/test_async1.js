const { assert } = require('chai');
const jsAsync1 = require('../src/js_async1');

describe('Диалоговый Event Emitter создан успешно', () => {
  describe('Объект EventEmitter сформирован', () => {
    it('Приветствие выполнено', () => {
      const greeting = jsAsync1.createBasicBot('Hello');
      assert.include(jsAsync1.greetings, greeting);
    });
    it('Ответ на вопрос "Как дела?" дан', () => {
      const feeling = jsAsync1.createBasicBot('How are you?');
      assert.include(jsAsync1.feelings, feeling);
    });
    it('Ответ на вопрос "Что делаешь?" дан', () => {
      const business = jsAsync1.createBasicBot('What are you doing?');
      assert.include(jsAsync1.businesses, business);
    });
    it('Ответ на не предусмотренный вопрос ничего не выдаст', () => {
      const business = jsAsync1.createBasicBot('Q');
      assert.isUndefined(business);
    });
  });
});
