const assert = require('chai').assert;
const oopTask2 = require('../src/OOP_task2');

describe("Движение товара за 10 дней успешно смоделированно", function() {

    describe("Модель движения товара за 1 день построена", function() {
        
        it("Количество произведенного товара задано", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                assert.isNotNull(oopTask2[amount-1].produce);
                assert.isAtMost(oopTask2[amount-1].produce, 150);
                assert.isAtLeast(oopTask2[amount-1].produce, 50);
            }
        });

        it("Количество доставленного товара задано", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                assert.isNotNull(oopTask2[amount-1].deliver);
                assert.isAtMost(oopTask2[amount-1].deliver, 100);
            }
        });

        it("Необходимость в товаре задана", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                assert.isNotNull(oopTask2[amount-1].needs);
                assert.isAtMost(oopTask2[amount-1].needs, 120);
                assert.isAtLeast(oopTask2[amount-1].needs, 70);
            }
        });

        it("Количество купленного товара задано", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                assert.isNotNull(oopTask2[amount-1].purchased);
                assert.isAtMost(oopTask2[amount-1].purchased, 120);
                assert.isAtLeast(oopTask2[amount-1].purchased, 50);
            }
        });
    
        it("Дельта между произведенным и доставленным товаром посчитанна верно", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let delta = oopTask2[amount-1].produce - oopTask2[amount-1].deliver;
                if (delta < 0) delta = 0;
                assert.equal(oopTask2[amount-1].leftManufact, delta);
            }
        });

        it("Дельта между доставленным и купленным товаром посчитанна верно", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let delta = oopTask2[amount-1].deliver - oopTask2[amount-1].needs;
                if (delta < 0) delta = 0;
                assert.equal(oopTask2[amount-1].leftDeliv, delta);
            }
        });
        
    });

    describe("Количество товара у производителя по истечению 10 дней - верно", function() {
        
        it("Оно = сумме кол-в товара за каждый день", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let total = 0;
                let arrProduct = oopTask2.slice(0, amount-1);
                arrProduct.forEach(function(elem){
                    total += elem.produce
                    return total
                })
                assert.equal(oopTask2.totalProduce, total);
            }
        });
    
    });
    
    describe("Количество товара необходимого потребителю по истечению 10 дней - верно", function() {
        
        it("Оно = сумме кол-в товара необходимого потребителю за каждый день", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let total = 0;
                let arrProduct = oopTask2.slice(0, amount-1);
                arrProduct.forEach(function(elem){
                    total += elem.needs
                    return total
                })
                assert.equal(oopTask2.totalNeeds, total);
            }
        });
    
    });

    describe("Среднее количество доставленного товара за день - верно", function() {
        
        it("Оно = всего доставленно товара/кол-во дней", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let arrProduct = oopTask2.slice(0, amount-1);
                let total = oopTask2[amount-1].totalDeliver/arrProduct.length;
                assert.equal(oopTask2[amount-1].meanDeliver, total);
            }
        });
    
    });

    describe("Количество товара произведенного за последние 3 дня - верно", function() {
        
        it("Оно = произведено товара за последние 3 дня/3", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let arrProduct = oopTask2.slice(amount-4, amount-1);
                let total = 0;
                arrProduct.forEach(function(elem){
                    total += elem.produce
                });
                assert.equal(oopTask2.produceLast3Days, total);
            }
        });
    
    });

    describe("Количество товара доставленного за последние 3 дня - верно", function() {
        
        it("Оно = доставленно товара за последние 3 дня/3", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let arrProduct = oopTask2.slice(amount-4, amount-1);
                let total = 0;
                arrProduct.forEach(function(elem){
                    total += elem.deliver
                });
                assert.equal(oopTask2.deliverLast3Days, total);
            }
        });
    
    });

    describe("КПД посредника - верно", function() {
        
        it("КПД = (Кол-во доставленного товара/Кол-во купленного товара)", function() {
            let amount = oopTask2.length;
            for(amount; amount > 0; amount--){
                let kpi = oopTask2[amount-1].allPurchased/oopTask2[amount-1].allDeliver;
                assert.equal(oopTask2[amount-1].kpi, kpi);
            }
        });
    
    });

});
