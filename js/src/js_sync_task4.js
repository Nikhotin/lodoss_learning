export {findGenderM};
export {findGenderW};
export {getNames};
export {oldestCatsM};
export {youngestCatsW};
export {catsArr};


import {catsGroupGenerate} from './js_sync_task3';

let catsArr = catsGroupGenerate(999);

function findGenderM(catsArr){
    let findObj = {gender: 'M'}

    const result = catsArr.filter(cat =>
        Object.keys(findObj).every(key =>
            cat[key] === findObj[key])
            );

    return result
}

function findGenderW(catsArr){
    let findObj = {gender: 'W'}

    const result = catsArr.filter(cat =>
        Object.keys(findObj).every(key =>
            cat[key] === findObj[key])
            );

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
    let findObj = {gender: 'M'}

    const result = catsArr.filter(cat =>
        Object.keys(findObj).every(key =>
            cat[key] === findObj[key])
            );

    let catSort = result.sort((a, b) => b.age - a.age);

    while (n>0){
        let oldCat = catSort.shift();
        oldestCatsList.push(oldCat);
        n--;
    }

    return oldestCatsList
}

function youngestCatsW(catsArr, n){
    let youngestCatsList = [];
    let findObj = {gender: 'W'}

    const result = catsArr.filter(cat =>
        Object.keys(findObj).every(key =>
            cat[key] === findObj[key])
            );

    let catSort = result.sort((a, b) => b.age - a.age);

    while (n>0){
        let oldCat = catSort.pop();
        youngestCatsList.push(oldCat);
        n--;
    }

    return youngestCatsList
}

console.log(catsArr);
console.log(findGenderM(catsArr));
console.log(getNames(catsArr));
console.log(oldestCatsM(catsArr, 10));
console.log(youngestCatsW(catsArr, 10));