const jsTask2 = require('./js_sync_task2');

function catsGroupGenerate(n) {
  const catList = [];
  let count = n;

  while (count > 0) {
    const cat = jsTask2.catFactory();
    catList.push(cat);
    count -= 1;
  }

  return catList;
}

module.exports = {
  catsGroupGenerate,
};
