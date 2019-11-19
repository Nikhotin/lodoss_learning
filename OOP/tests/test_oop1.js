const assert = require('chai').assert;
const oopTask1 = require('../src/OOP_task1');

describe("Модель успешно построена", function() {
    
    before(function(){
    })

    describe("Курс успешно создан", function() {
        
        it("Курс создан", function() {
            assert.isObject(oopTask1);
            assert.isString(oopTask1.courseName);
            assert.isArray(oopTask1.theme);
        });
    
    });

    describe("Темы успешно добавлены", function() {
        it("Количество тем равно заданному количеству", function() {
            let themeAmount = oopTask1.theme.length;
            for(themeAmount; themeAmount > 0; themeAmount--){
                assert.isObject(oopTask1.theme[themeAmount-1]);
                assert.isString(oopTask1.theme[themeAmount-1].themeName);
                assert.isArray(oopTask1.theme[themeAmount-1].question);
            }
 
        });
    
    });

    describe("Вопросы успешно добавлены", function() {
        it("Количество вопросов равно заданному количеству", function() {
            let themeAmount = oopTask1.theme.length;
            for(themeAmount; themeAmount > 0; themeAmount--){
                let questionAmount = oopTask1.theme[themeAmount-1].question.length;
                for(questionAmount; questionAmount>0; questionAmount--){
                    assert.isObject(oopTask1.theme[themeAmount-1].question[questionAmount-1]);
                    assert.isString(oopTask1.theme[themeAmount-1].question[questionAmount-1].questionName);
                    assert.isArray(oopTask1.theme[themeAmount-1].question[questionAmount-1].answer);
                }
            }
        });
    
    });

    describe("Ответы успешно добавлены", function() {
        it("В каждом вопросе есть хотя бы один правильный ответ", function() {
            let themeAmount = oopTask1.theme.length;
            for(themeAmount; themeAmount > 0; themeAmount--){
                let questionAmount = oopTask1.theme[themeAmount-1].question.length;
                for(questionAmount; questionAmount>0; questionAmount--){
                    let answerAmount = oopTask1.theme[themeAmount-1].question[questionAmount-1].answer.length
                    for(answerAmount; answerAmount>0; answerAmount--){
                        assert.isString(oopTask1.theme[themeAmount-1].question[questionAmount-1].answer[answerAmount-1].answerName);
                        assert.isBoolean(oopTask1.theme[themeAmount-1].question[questionAmount-1].answer[answerAmount-1].correct);
                    }       
                }
            }     
        });
    
    });

});
