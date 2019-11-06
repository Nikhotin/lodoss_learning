export {catsGroupGenerate};

import {catFactory} from './js_sync_task2';
import {name} from './js_sync_task2';
import {age} from './js_sync_task2';
import {gender} from './js_sync_task2';
import {legsCount} from './js_sync_task2';
import {tailLength} from './js_sync_task2';


function catsGroupGenerate (n){
    let catList = [];
    let cat = catFactory();
    while (n>0){
        catList.push(cat);
        n--;
    }
    return catList
}
console.log(catsGroupGenerate(5))