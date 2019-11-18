function randIntMixin(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

class Manufacturer{
    constructor(){
        this.produce = randIntMixin(50,150);
    }

}

class Intermediary extends Manufacturer{
    constructor(){
        super();

        if (this.produce <= 100){
            this.leftManufact = 0;
        }else{
            this.leftManufact = this.produce - 100;
        }

        if (this.produce >= 100){
            this.deliver = 100;
        } else{
            this.deliver = this.produce;
        }
    }   
}

class Customer extends Intermediary{
    constructor(){
        super();
        this.needs = randIntMixin(70,120);

        if(this.deliver > this.needs){
            this.leftDeliv = this.deliver - this.needs;
        }else{
            this.leftDeliv = 0;
        }

        if (this.needs >= this.deliver){
            this.purchased = this.deliver;
        } else{
            this.purchased = this.needs;
        }

        if(this.needs > this.deliver){
            this.unmetNeeds = false;
        }else{
            this.unmetNeeds = true;
        }
    }
}

class Product extends Customer{
    constructor(){
        super();
    }
    countTotalProduce(){

    }
    countTotalNeeds(){

    }
    countMeanDeliver(){

    }
    countProduceLast3Days(){

    }
    countDeliverLast3Days(){

    }
    countKPIofInterm(){
        
    }
    simulateMovement(daysAmount){
        let daysArr = [];
        for(daysAmount; daysAmount>0;daysAmount--){
            let day = new Product;
            daysArr.push(day)
        }
        // daysAmount = daysArr.length - 1;
        // for(daysAmount; daysAmount>0; daysAmount--){
        //     daysArr[daysAmount-1].produce += daysArr[daysAmount].leftManufact;
        // }
        return daysArr
    }
}

let product = new Product;
product = product.simulateMovement(10);
console.table(product)

module.exports = product;
