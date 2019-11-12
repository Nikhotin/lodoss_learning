const jsTask4 = require('./js_sync_task4');

function nameStats() {
    let namesList = jsTask4.getNames(jsTask4.catsArr);
    let catAmount = {};

    namesList.forEach(function(elem){
          if (Object.keys(catAmount).join(';').includes(elem)){
            
            catAmount[elem] += 1;
        } else{
            catAmount[elem] = 1;
        }

    });

    return catAmount
}

module.exports = {
    nameStats
}