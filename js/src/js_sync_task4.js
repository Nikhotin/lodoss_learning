export {findGenderM};
export {findGenderW};
export {getNames};
export {oldestCatsM};
export {youngestCatsW};
export {catsArr};


import {catsGroupGenerate} from './js_sync_task3';

let catsArr = catsGroupGenerate(999);

function findGenderM(catsArr){
    let result = catsArr.filter(cat => cat.gender == 'M');

    return result
}

function findGenderW(catsArr){
    let result = catsArr.filter(cat => cat.gender == 'W');

    return result
}

function getNames(catsArr){
    let catsNames = [];
     
    catsArr.forEach(function(item){
            let catName = Object.values(item)[0];
            catsNames.push(catName);
    }); 
    
    return catsNames
}

function oldestCatsM(catsArr, n){
    let oldestCatsList = [];
    let result = catsArr.filter(cat => cat.gender == 'M');
    let catSort = result.sort((a, b) => b.age - a.age);
    oldestCatsList = catSort.slice(0, n);

    return oldestCatsList
}

function youngestCatsW(catsArr, n){
    let youngestCatsList = [];
    let result = catsArr.filter(cat => cat.gender == 'W');
    let catSort = result.sort((a, b) => a.age - b.age);
    youngestCatsList = catSort.slice(0, n);

    return youngestCatsList
}

console.log(catsArr);
console.log(findGenderM(catsArr));
console.log(getNames(catsArr));
console.log(oldestCatsM(catsArr, 10));
console.log(youngestCatsW(catsArr, 10));