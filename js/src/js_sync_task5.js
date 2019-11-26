const jsTask4 = require('./js_sync_task4');

function nameStats() {
  const namesList = jsTask4.getNames(jsTask4.catsArr);
  const catAmount = {};

  namesList.forEach((elem) => {
    if (Object.keys(catAmount).join(';').includes(elem)) {
      catAmount[elem] += 1;
    } else {
      catAmount[elem] = 1;
    }
  });

  return catAmount;
}

module.exports = {
  nameStats,
};
