const jsTask3 = require('./js_sync_task3');
const catsArr = jsTask3.catsGroupGenerate(999);

function findGenderM(catsArr) {
    return catsArr.filter(cat => cat.gender == 'M');
}

function findGenderW(catsArr) {
    return catsArr.filter(cat => cat.gender == 'W')
}

function getNames(catsArr) {
    let catsNames = [];
     
    catsArr.forEach(function(item){
            let catName = Object.values(item)[0];
            catsNames.push(catName);
    }); 
    return catsNames
}

function oldestCatsM(catsArr, n) {
    let oldestCatsList = [];
    oldestCatsList = catsArr.filter(cat => cat.gender == 'M').sort((a, b) => b.age - a.age).slice(0, n);
    return oldestCatsList
}

function youngestCatsW(catsArr, n) {
    let youngestCatsList = [];
     youngestCatsList = catsArr.filter(cat => cat.gender == 'W').sort((a, b) => a.age - b.age).slice(0, n);
    return youngestCatsList
}

module.exports = {
    catsArr, findGenderM, findGenderW, getNames, oldestCatsM, youngestCatsW
}
