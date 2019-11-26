"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function randInt(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var Producer = function () {
  function Producer(minPossibleProduce, maxPossibleProduce) {
    _classCallCheck(this, Producer);

    this.product = [];
    this.left = [];
    this.minPossibleProduce = minPossibleProduce;
    this.maxPossibleProduce = maxPossibleProduce;
  }

  _createClass(Producer, [{
    key: "produceProduct",
    value: function produceProduct() {
      var i = this.product.length - 1;
      if (this.left[i] !== undefined) {
        this.product.push(randInt(this.minPossibleProduce, this.maxPossibleProduce) + this.left[i]);
      } else {
        this.product.push(randInt(this.minPossibleProduce, this.maxPossibleProduce));
      }
    }
  }, {
    key: "takeProduct",
    value: function takeProduct(upTo, deliver) {
      var i = this.product.length - 1;
      var prevRem = deliver.takeLeft(i);
      var produced = this.product[i];
      var total = void 0;
      if (produced + prevRem >= upTo) {
        total = upTo;
      } else {
        total = produced;
      }
      this.left[i] = this.product[i] + prevRem - total;
      return total;
    }
  }]);

  return Producer;
}();

var Deliveryman = function () {
  function Deliveryman(maxPossibleBuy) {
    _classCallCheck(this, Deliveryman);

    this.productBought = [];
    this.left = [];
    this.maxPossibleBuy = maxPossibleBuy;
  }

  _createClass(Deliveryman, [{
    key: "giveLeftProductForProducer",
    value: function giveLeftProductForProducer(producer) {
      var i = producer.product.length - 1;
      if (producer.product[i] <= this.maxPossibleBuy) {
        producer.left.push(0);
      } else {
        producer.left.push(producer.product[i] - this.maxPossibleBuy);
      }
    }
  }, {
    key: "takeLeft",
    value: function takeLeft(index) {
      return this.left[index] - 1 || 0;
    }
  }, {
    key: "getProduct",
    value: function getProduct(producer) {
      var bought = producer.takeProduct(this.maxPossibleBuy, this);
      this.productBought.push(bought);
    }
  }]);

  return Deliveryman;
}();

var Customer = function () {
  function Customer(minNeeds, maxNeeds) {
    _classCallCheck(this, Customer);

    this.needs = [];
    this.purchased = [];
    this.unmetNeeds = [];
    this.minNeeds = minNeeds;
    this.maxNeeds = maxNeeds;
  }

  _createClass(Customer, [{
    key: "generateNeeds",
    value: function generateNeeds() {
      this.needs.push(randInt(this.minNeeds, this.maxNeeds));
    }
  }, {
    key: "giveLeftProductForDeliver",
    value: function giveLeftProductForDeliver(deliver) {
      var i = deliver.productBought.length - 1;
      if (deliver.productBought[i] > this.needs[i]) {
        deliver.left.push(deliver.productBought[i] - this.needs[i]);
      } else {
        deliver.left.push(0);
      }
    }
  }, {
    key: "buyProduct",
    value: function buyProduct(deliver) {
      var i = deliver.productBought.length - 1;
      if (this.needs[i] >= deliver.productBought[i]) {
        this.purchased.push(deliver.productBought[i]);
      } else {
        this.purchased.push(this.needs[i]);
      }
    }
  }, {
    key: "determineSatisfaction",
    value: function determineSatisfaction(deliver) {
      var i = deliver.productBought.length - 1;
      if (this.needs[i] > deliver.productBought[i]) {
        this.unmetNeeds.push(false);
      } else {
        this.unmetNeeds.push(true);
      }
    }
  }]);

  return Customer;
}();

var Statistic = function () {
  function Statistic() {
    _classCallCheck(this, Statistic);
  }

  _createClass(Statistic, [{
    key: "simulateMovement",
    value: function simulateMovement(producer, deliveryman, customer, daysAmount) {
      // eslint-disable-next-line no-param-reassign
      for (daysAmount; daysAmount > 0; daysAmount -= 1) {
        producer.produceProduct();
        deliveryman.giveLeftProductForProducer(producer);
        deliveryman.getProduct(producer);
        customer.generateNeeds();
        customer.giveLeftProductForDeliver(deliveryman);
        customer.buyProduct(deliveryman);
        customer.determineSatisfaction(deliveryman);
        this.calculateTotalProduce(producer);
        this.calculateTotalNeeds(customer);
        this.calculateMeanDeliver(deliveryman);
        this.calculateProduceLast3Days(producer);
        this.calculateDeliverLast3Days(deliveryman);
        this.calculateKpiDeliverman(deliveryman);
      }
    }
  }, {
    key: "calculateTotalProduce",
    value: function calculateTotalProduce(producer) {
      this.totalProduce = 0;
      if (producer.left[producer.left.length - 1] !== undefined) {
        this.totalProduce = producer.left[producer.left.length - 1];
      }
    }
  }, {
    key: "calculateTotalNeeds",
    value: function calculateTotalNeeds(customer) {
      var totalNeeds = 0;
      var i = customer.needs.length;
      for (i; i > 0; i -= 1) {
        totalNeeds += customer.needs[i - 1];
      }

      this.totalNeeds = totalNeeds;
    }
  }, {
    key: "calculateMeanDeliver",
    value: function calculateMeanDeliver(deliver) {
      var totalDeliv = 0;
      var i = deliver.productBought.length;
      for (i; i > 0; i -= 1) {
        totalDeliv += deliver.productBought[i - 1];
      }

      this.meanDeliver = totalDeliv / deliver.productBought.length;
    }
  }, {
    key: "calculateProduceLast3Days",
    value: function calculateProduceLast3Days(producer) {
      var produceLast3Days = 0;
      var arrLast3Days = producer.product.slice(-3);
      var i = arrLast3Days.length - 1;
      for (i; i >= 0; i -= 1) {
        produceLast3Days += arrLast3Days[i];
      }

      this.produceLast3Days = produceLast3Days;
    }
  }, {
    key: "calculateDeliverLast3Days",
    value: function calculateDeliverLast3Days(deliver) {
      var deliverLast3Days = 0;
      var arrLast3Days = deliver.productBought.slice(-3);
      var i = arrLast3Days.length - 1;
      for (i; i >= 0; i -= 1) {
        deliverLast3Days += arrLast3Days[i];
      }

      this.deliverLast3Days = deliverLast3Days;
    }
  }, {
    key: "calculateKpiDeliverman",
    value: function calculateKpiDeliverman(deliver) {
      if (deliver.productBought === undefined || deliver.productBought === 0) {
        this.kpiDeliverman = 0 + "%";
        return;
      }

      var totalProductBought = 0;
      var totalLeft = 0;
      var i = deliver.productBought.length;
      for (i; i > 0; i -= 1) {
        totalProductBought += deliver.productBought[i - 1];
      }
      i = deliver.left.length;
      for (i; i > 0; i -= 1) {
        totalLeft += deliver.left[i - 1];
      }

      this.kpiDeliverman = Math.floor((totalProductBought - totalLeft) / totalProductBought * 100) + "%";
    }
  }]);

  return Statistic;
}();

var producer = new Producer(50, 150);
var deliveryman = new Deliveryman(100);
var customer = new Customer(70, 120);
var statistic = new Statistic();
statistic.simulateMovement(producer, deliveryman, customer, 10);

console.table(producer);
console.table(deliveryman);
console.table(customer);
console.table(statistic);

module.exports = {
  producer: producer,
  deliveryman: deliveryman,
  customer: customer,
  statistic: statistic
};