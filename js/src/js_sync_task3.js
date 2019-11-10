let _js_task2 = require('./js_sync_task2');

function catsGroupGenerate(n) {
    let catList = [];
    
    while (n>0){
        let cat = _js_task2.catFactory();
        catList.push(cat);
        n--;
    }
        
    return catList
}

module.exports.catsGroupGenerate = catsGroupGenerate;
