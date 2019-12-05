
const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const Producer = (function () {
  function Producer(minPossibleProduce, maxPossibleProduce) {
    _classCallCheck(this, Producer);

    this.product = [];
    this.left = [];
    this.minPossibleProduce = minPossibleProduce;
    this.maxPossibleProduce = maxPossibleProduce;
  }

  _createClass(Producer, [{
    key: 'produceProduct',
    value: function produceProduct() {
      const i = this.product.length - 1;
      if (this.left[i] !== undefined) {
        this.product.push(randInt(this.minPossibleProduce, this.maxPossibleProduce) + this.left[i]);
      } else {
        this.product.push(randInt(this.minPossibleProduce, this.maxPossibleProduce));
      }
    },
  }, {
    key: 'takeProduct',
    value: function takeProduct(upTo, deliver) {
      const i = this.product.length - 1;
      const prevRem = deliver.takeLeft(i);
      const produced = this.product[i];
      let total = void 0;
      if (produced + prevRem >= upTo) {
        total = upTo;
      } else {
        total = produced;
      }
      this.left[i] = this.product[i] + prevRem - total;
      return total;
    },
  }]);

  return Producer;
}());

const Deliveryman = (function () {
  function Deliveryman(maxPossibleBuy) {
    _classCallCheck(this, Deliveryman);

    this.productBought = [];
    this.left = [];
    this.maxPossibleBuy = maxPossibleBuy;
  }

  _createClass(Deliveryman, [{
    key: 'giveLeftProductForProducer',
    value: function giveLeftProductForProducer(producer) {
      const i = producer.product.length - 1;
      if (producer.product[i] <= this.maxPossibleBuy) {
        producer.left.push(0);
      } else {
        producer.left.push(producer.product[i] - this.maxPossibleBuy);
      }
    },
  }, {
    key: 'takeLeft',
    value: function takeLeft(index) {
      return this.left[index] - 1 || 0;
    },
  }, {
    key: 'getProduct',
    value: function getProduct(producer) {
      const bought = producer.takeProduct(this.maxPossibleBuy, this);
      this.productBought.push(bought);
    },
  }]);

  return Deliveryman;
}());

const Customer = (function () {
  function Customer(minNeeds, maxNeeds) {
    _classCallCheck(this, Customer);

    this.needs = [];
    this.purchased = [];
    this.unmetNeeds = [];
    this.minNeeds = minNeeds;
    this.maxNeeds = maxNeeds;
  }

  _createClass(Customer, [{
    key: 'generateNeeds',
    value: function generateNeeds() {
      this.needs.push(randInt(this.minNeeds, this.maxNeeds));
    },
  }, {
    key: 'giveLeftProductForDeliver',
    value: function giveLeftProductForDeliver(deliver) {
      const i = deliver.productBought.length - 1;
      if (deliver.productBought[i] > this.needs[i]) {
        deliver.left.push(deliver.productBought[i] - this.needs[i]);
      } else {
        deliver.left.push(0);
      }
    },
  }, {
    key: 'buyProduct',
    value: function buyProduct(deliver) {
      const i = deliver.productBought.length - 1;
      if (this.needs[i] >= deliver.productBought[i]) {
        this.purchased.push(deliver.productBought[i]);
      } else {
        this.purchased.push(this.needs[i]);
      }
    },
  }, {
    key: 'determineSatisfaction',
    value: function determineSatisfaction(deliver) {
      const i = deliver.productBought.length - 1;
      if (this.needs[i] > deliver.productBought[i]) {
        this.unmetNeeds.push(false);
      } else {
        this.unmetNeeds.push(true);
      }
    },
  }]);

  return Customer;
}());

const Statistic = (function () {
  function Statistic() {
    _classCallCheck(this, Statistic);
  }

  _createClass(Statistic, [{
    key: 'simulateMovement',
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
    },
  }, {
    key: 'calculateTotalProduce',
    value: function calculateTotalProduce(producer) {
      this.totalProduce = 0;
      if (producer.left[producer.left.length - 1] !== undefined) {
        this.totalProduce = producer.left[producer.left.length - 1];
      }
    },
  }, {
    key: 'calculateTotalNeeds',
    value: function calculateTotalNeeds(customer) {
      let totalNeeds = 0;
      let i = customer.needs.length;
      for (i; i > 0; i -= 1) {
        totalNeeds += customer.needs[i - 1];
      }

      this.totalNeeds = totalNeeds;
    },
  }, {
    key: 'calculateMeanDeliver',
    value: function calculateMeanDeliver(deliver) {
      let totalDeliv = 0;
      let i = deliver.productBought.length;
      for (i; i > 0; i -= 1) {
        totalDeliv += deliver.productBought[i - 1];
      }

      this.meanDeliver = totalDeliv / deliver.productBought.length;
    },
  }, {
    key: 'calculateProduceLast3Days',
    value: function calculateProduceLast3Days(producer) {
      let produceLast3Days = 0;
      const arrLast3Days = producer.product.slice(-3);
      let i = arrLast3Days.length - 1;
      for (i; i >= 0; i -= 1) {
        produceLast3Days += arrLast3Days[i];
      }

      this.produceLast3Days = produceLast3Days;
    },
  }, {
    key: 'calculateDeliverLast3Days',
    value: function calculateDeliverLast3Days(deliver) {
      let deliverLast3Days = 0;
      const arrLast3Days = deliver.productBought.slice(-3);
      let i = arrLast3Days.length - 1;
      for (i; i >= 0; i -= 1) {
        deliverLast3Days += arrLast3Days[i];
      }

      this.deliverLast3Days = deliverLast3Days;
    },
  }, {
    key: 'calculateKpiDeliverman',
    value: function calculateKpiDeliverman(deliver) {
      if (deliver.productBought === undefined || deliver.productBought === 0) {
        this.kpiDeliverman = `${0}%`;
        return;
      }

      let totalProductBought = 0;
      let totalLeft = 0;
      let i = deliver.productBought.length;
      for (i; i > 0; i -= 1) {
        totalProductBought += deliver.productBought[i - 1];
      }
      i = deliver.left.length;
      for (i; i > 0; i -= 1) {
        totalLeft += deliver.left[i - 1];
      }

      this.kpiDeliverman = `${Math.floor((totalProductBought - totalLeft) / totalProductBought * 100)}%`;
    },
  }]);

  return Statistic;
}());

const producer = new Producer(50, 150);
const deliveryman = new Deliveryman(100);
const customer = new Customer(70, 120);
const statistic = new Statistic();
statistic.simulateMovement(producer, deliveryman, customer, 10);

console.table(producer);
console.table(deliveryman);
console.table(customer);
console.table(statistic);

module.exports = {
  producer,
  deliveryman,
  customer,
  statistic,
};
