export {nameStats};

import {catsArr} from './js_sync_task4';
import {getNames} from './js_sync_task4';



function nameStats (catsArr){
    let set = new Set(getNames(catsArr));
    let namesList = getNames(catsArr);
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

console.log(nameStats(catsArr));