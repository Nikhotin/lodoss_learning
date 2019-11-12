const jsTask2 = require('./js_sync_task2');

function catsGroupGenerate(n) {
    let catList = [];
    
    while (n>0){
        let cat = jsTask2.catFactory();
        catList.push(cat);
        n--;
    }
        
    return catList
}

module.exports = {
    catsGroupGenerate
}
