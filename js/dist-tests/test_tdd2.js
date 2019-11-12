'use strict';

var assert = require('chai').assert;
var tddTask2 = require('../src/tdd_task2');

describe("catFactory", function () {

    describe("Принадлежность свойств объекта к элементам словаря", function () {

        it("Свойство catName принадлежит массиву name", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.name, a.name);
        });
        it("Свойство catAge принадлежит массиву age", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.age, a.age);
        });
        it("Свойство catGender принадлежит массиву gender", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.gender, a.gender);
        });
        it("Свойство catLegsCount принадлежит массиву legsCount", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.legsCount, a.legsCount);
        });
        it("Свойство catTailLength принадлежит массиву tailLength", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.tailLength, a.tailLength);
        });
        it("Свойство catLoudness принадлежит массиву loudness", function () {
            var a = tddTask2.catFactory();
            assert.include(tddTask2.loudness, a.loudness);
        });
    });
});