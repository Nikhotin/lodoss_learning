
const _require = require('chai');

const { assert } = _require;

const oopTask2 = require('../src/OOP_task2');

describe('Движение товара за 10 дней успешно смоделированно', () => {
  describe('Количество товара у производителя по истечению 10 дней - верно', () => {
    it('Метод calculateTotalProduce определяет последний элемент массива оставшихся у производителя товаров', () => {
      oopTask2.statistic.calculateTotalProduce({ left: [1, 2, 3, 4, 5, 6] });
      assert.equal(oopTask2.statistic.totalProduce, 6);

      oopTask2.statistic.calculateTotalProduce({ left: [] });
      assert.equal(oopTask2.statistic.totalProduce, 0);

      oopTask2.statistic.calculateTotalProduce({ left: [1, 2, 3, 4, 5, 10000] });
      assert.equal(oopTask2.statistic.totalProduce, 10000);

      oopTask2.statistic.calculateTotalProduce({ left: [1] });
      assert.equal(oopTask2.statistic.totalProduce, 1);
    });
  });

  describe('Количество товара необходимого потребителю по истечению 10 дней - верно', () => {
    it('Метод calculateTotalNeeds вычисляет сумму элементов массива потребностей покупателя', () => {
      oopTask2.statistic.calculateTotalNeeds({ needs: [1, 1, 1, 1, 1, 1] });
      assert.equal(oopTask2.statistic.totalNeeds, 6);

      oopTask2.statistic.calculateTotalNeeds({ needs: [-1000, 500, 500] });
      assert.equal(oopTask2.statistic.totalNeeds, 0);

      oopTask2.statistic.calculateTotalNeeds({ needs: [] });
      assert.equal(oopTask2.statistic.totalNeeds, 0);

      oopTask2.statistic.calculateTotalNeeds({ needs: [1000, 2000, 3000, 4] });
      assert.equal(oopTask2.statistic.totalNeeds, 6004);
    });
  });

  describe('Среднее количество доставленного товара за день - верно', () => {
    it('Метод calculateMeanDeliver вычисляет среднее значение массива купленных у производителя товаров', () => {
      oopTask2.statistic.calculateMeanDeliver({ productBought: [4, 4, 4, 4, 4, 4, 4, 4, 4] });
      assert.equal(oopTask2.statistic.meanDeliver, 4);

      oopTask2.statistic.calculateMeanDeliver({ productBought: [] });
      assert.isNaN(oopTask2.statistic.meanDeliver);

      oopTask2.statistic.calculateMeanDeliver({ productBought: [0] });
      assert.equal(oopTask2.statistic.meanDeliver, 0);

      oopTask2.statistic.calculateMeanDeliver({ productBought: [1000, 2000, 1000, 2000] });
      assert.equal(oopTask2.statistic.meanDeliver, 1500);
    });
  });

  describe('Количество товара произведенного за последние 3 дня - верно', () => {
    it('Метод calculateProduceLast3Days вычисляет сумму 3х последних элементов массива произведенной продукции', () => {
      oopTask2.statistic.calculateProduceLast3Days({ product: [1, 2, 3, 4, 5, 6] });
      assert.equal(oopTask2.statistic.produceLast3Days, 15);

      oopTask2.statistic.calculateProduceLast3Days({ product: [1, 2] });
      assert.equal(oopTask2.statistic.produceLast3Days, 3);

      oopTask2.statistic.calculateProduceLast3Days({ product: [10] });
      assert.equal(oopTask2.statistic.produceLast3Days, 10);

      oopTask2.statistic.calculateProduceLast3Days({ product: [] });
      assert.equal(oopTask2.statistic.produceLast3Days, 0);
    });
  });

  describe('Количество товара доставленного за последние 3 дня - верно', () => {
    it('Метод calculateDeliverLast3Days вычисляет сумму 3х последних элементов массива доставленной продукции', () => {
      oopTask2.statistic.calculateDeliverLast3Days({ productBought: [80, 120, 30, 1, 49, 150] });
      assert.equal(oopTask2.statistic.deliverLast3Days, 200);

      oopTask2.statistic.calculateDeliverLast3Days({ productBought: [1, 2] });
      assert.equal(oopTask2.statistic.deliverLast3Days, 3);

      oopTask2.statistic.calculateDeliverLast3Days({ productBought: [10] });
      assert.equal(oopTask2.statistic.deliverLast3Days, 10);

      oopTask2.statistic.calculateDeliverLast3Days({ productBought: [] });
      assert.equal(oopTask2.statistic.deliverLast3Days, 0);
    });
  });

  describe('КПД посредника - верно', () => {
    it('Метод calculateKpiDeliverman извлекает целую часть из частного проданной продукции на привезенную продукцию', () => {
      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        left: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '80%');

      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        left: [2, 0, 1, 0, 1],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '60%');

      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [],
        left: [],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '0%');

      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [1, 1, 1],
        left: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '33%');

      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [0],
        left: [1, 3, 4, 100],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '0%');

      oopTask2.statistic.calculateKpiDeliverman({
        productBought: [1, 1, 1],
        left: [0],
      });
      assert.equal(oopTask2.statistic.kpiDeliverman, '100%');
    });
  });
});
