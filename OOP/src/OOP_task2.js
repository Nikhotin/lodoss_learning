function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


class Producer{
    constructor(){
        this.product = [];
        this.left = [];
    }

    produceProduct(min,max){
        let i = this.product.length - 1;
        if(this.left[i] != undefined){
            this.product.push(randInt(min,max) + this.left[i]);
        }else{
            this.product.push(randInt(min,max));
        }
    }
}


class Deliveryman{
    constructor(){
        this.productBought = [];
        this.left = [];
    }

    giveLeftProductForProducer(producer){
        let i = producer.product.length - 1;
        if(producer.product[i] <= 100){
            producer.left.push(0);
        }else{
            producer.left.push(producer.product[i] - 100);
        }
    }

    getProduct(producer){
        let i = producer.product.length - 1;
        if(producer.product[i] + this.left[i-1] >= 100 && this.left[i-1] != undefined){
            this.productBought.push(100);
            producer.left[i] = producer.product[i] + this.left[i-1] - 100;
        }else if(producer.product[i] + this.left[i-1] < 100 && this.left[i-1] != undefined){
            this.productBought.push(producer.product[i]);
        }else if(producer.product[i] >= 100){
            this.productBought.push(100);
        }else{
            this.productBought.push(producer.product[i]);
        }
    }
}


class Customer{
    constructor(){
        this.needs = [];
        this.purchased = [];
        this.unmetNeeds = [];
    }

    generateNeeds(min,max){
        this.needs.push(randInt(min,max));
    }

    giveLeftProductForDeliver(deliver){
        let i = producer.product.length - 1;
        if(deliver.productBought[i] > this.needs[i]){
            deliver.left.push(deliver.productBought[i] - this.needs[i]);
        }else{
            deliver.left.push(0);
        }
    }

    buyProduct(deliver){
        let i = producer.product.length - 1;
        if (this.needs[i] >= deliver.productBought[i]){
            this.purchased.push(deliver.productBought[i]);
        } else{
            this.purchased.push(this.needs[i]);
        }
    }

    determineSatisfaction(deliver){
        let i = producer.product.length - 1;
        if(this.needs[i] > deliver.productBought[i]){
            this.unmetNeeds.push(false);
        }else{
            this.unmetNeeds.push(true);
        }
    }
}

class Statistic{
    constructor(){
    }

    simulateMovement(producer, deliveryman, customer, daysAmount){
        for(daysAmount; daysAmount>0; daysAmount--){
            producer.produceProduct(50,150);
            deliveryman.giveLeftProductForProducer(producer);
            deliveryman.getProduct(producer);
            customer.generateNeeds(70,120);
            customer.giveLeftProductForDeliver(deliveryman);
            customer.buyProduct(deliveryman);
            customer.determineSatisfaction(deliveryman);
        }
    }

    calculateTotalProduce(producer){
        this.totalProduce = 0;
        if(producer.left[producer.left.length-1] != undefined)
        this.totalProduce = producer.left[producer.left.length-1];
    }

    calculateTotalNeeds(customer){
        let totalNeeds = 0;
        let i = customer.needs.length;
        for(i; i>0; i--){
            totalNeeds += customer.needs[i-1];
        }

        this.totalNeeds = totalNeeds;
    }

    calculateMeanDeliver(deliver){
        let totalDeliv = 0;
        let i = deliver.productBought.length;
        for(i; i>0; i--){
            totalDeliv += deliver.productBought[i-1];
        }

        this.meanDeliver = totalDeliv/deliver.productBought.length;
    }

    calculateProduceLast3Days(producer){
        let produceLast3Days = 0;
        let arrLast3Days = producer.product.slice(-3);
        let i = arrLast3Days.length - 1;
        for(i; i>=0; i--){
            produceLast3Days += arrLast3Days[i];
        }

        this.produceLast3Days = produceLast3Days;
    }

    calculateDeliverLast3Days(deliver){
        let deliverLast3Days = 0;
        let arrLast3Days = deliver.productBought.slice(-3);
        let i = arrLast3Days.length - 1;
        for(i; i>=0; i--){
            deliverLast3Days += arrLast3Days[i];
        }

        this.deliverLast3Days = deliverLast3Days;
    }

    calculateKpiDeliverman(deliver){
        if(deliver.productBought == undefined || deliver.productBought == 0){
            this.kpiDeliverman = 0 + '%';
            return
        }

        let totalProductBought = 0;
        let totalLeft = 0;
        let i = deliver.productBought.length;
        for(i; i>0; i--){
            totalProductBought += deliver.productBought[i-1];
        }
        i = deliver.left.length;
        for(i; i>0; i--){
            totalLeft += deliver.left[i-1];
        }

        this.kpiDeliverman = Math.floor(((totalProductBought - totalLeft)/totalProductBought)*100) + '%';
    }
}

let producer = new Producer();
let deliveryman = new Deliveryman();
let customer = new Customer();
let statistic = new Statistic();
statistic.simulateMovement(producer, deliveryman, customer, 10);
statistic.calculateTotalProduce(producer);
statistic.calculateTotalNeeds(customer);
statistic.calculateMeanDeliver(deliveryman);
statistic.calculateProduceLast3Days(producer);
statistic.calculateDeliverLast3Days(deliveryman);
statistic.calculateKpiDeliverman(deliveryman);

console.table(producer)
console.table(deliveryman)
console.table(customer)
console.table(statistic)

module.exports = {
    producer,
    deliveryman,
    customer,
    statistic
};
