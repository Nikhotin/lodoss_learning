let _js_task4 = require('./js_sync_task4');


function nameStats() {
    let set = new Set(_js_task4.getNames(_js_task4.catsArr));
    let namesList = _js_task4.getNames(_js_task4.catsArr);
    let namesAmount = [];
    let catAmount = {};

    set.forEach(function(elem){
        let counter = 0;
        namesList.forEach(function(value){
            if(elem == value){
                counter++
            }
            return counter
        })

        catAmount = {
            Name: elem,
            Amount: counter
        };

        namesAmount.push(catAmount)
    })
   
    return namesAmount
}

module.exports.nameStats = nameStats;
