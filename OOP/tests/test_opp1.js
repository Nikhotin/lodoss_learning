const assert = require('chai').assert;
const oopTask1 = require('../src/OOP_task1');

describe("Модель успешно построена", function() {
    
    before(function(){
        oopTask1.makeCourse("Back-end dev");
        oopTask1.makeTheme("console");
        oopTask1.makeQuestion("How can you make new file?");
        oopTask1.makeAnswer("cd", false);
        oopTask1.makeAnswer("touch", true);
        oopTask1.makeAnswer("mkdir", false);
        oopTask1.makeAnswer("mv", false);
    })

    describe("Курс успешно создан", function() {
        
        it("Курс создан", function() {
            assert.isObject();
            assert.isString();
            assert.isArray();
        });
    
    });

    describe("Темы успешно добавлены", function() {
        it("Количество тем равно заданному количеству", function() {
            assert.isObject();
            assert.isString();
            assert.isArray();
        });
    
    });

    describe("Вопросы успешно добавлены", function() {
        it("Количество вопросов равно заданному количеству", function() {
            assert.isObject();
            assert.isString();
            assert.isArray();
        });
    
    });

    describe("Ответы успешно добавлены", function() {
        it("Количество ответов равно заданному количеству", function() {
            assert.isObject();
            assert.isString();
            assert.isArray();
        });
        it("В каждом вопросе есть хотя бы один правильный ответ", function() {
            assert.isObject();
            assert.isString();
            assert.isArray();
        });
    
    });

});


course = {
    name: "Back-end dev",
    theme: [
        {name: "console", question: [
            {name: "How can you make new file", answer: [
                {difin: "cd", correct: false},{difin: "mv", correct: false},
                {difin: "touch", correct: true},{difin: "mkdir", correct: false}]}, 
            {name: "Question2", answer: []}, 
            {name: "Question3", answer: []}, 
            {name: "Question4", answer: []}]}, 
        {name: "GitHub", question: [  
            {name: "Question1", answer: []}, {name: "Question2", answer: []}, 
            {name: "Question3", answer: []}, {name: "Question4", answer: []}]}, 
        {name: "JS", question: [
            {name: "Question1", answer: []}, {name: "Question2", answer: []}, 
            {name: "Question3", answer: []}, {name: "Question4", answer: []}]},
        {name: "OOP", question: [
            {name: "Question1", answer: []}, {name: "Question2", answer: []}, 
            {name: "Question3", answer: []}, {name: "Question4", answer: []}]}
    ]
}