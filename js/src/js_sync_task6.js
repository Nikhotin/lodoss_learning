const jsTask1 = require('./js_sync_task1');

const name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy', 'Albert', 'Pyshok'];
const age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gender = ['M', 'W'];
const legsCount = [2, 3, 4];
const tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];


function catFactory(defaults) {
  const catName = defaults.name || jsTask1.pick(name);
  const catAge = defaults.age || jsTask1.pick(age);
  const catGender = defaults.gender || jsTask1.pick(gender);
  const catLegsCount = defaults.tailLength || jsTask1.pick(tailLength);
  const catTailLength = defaults.legsCount || jsTask1.pick(legsCount);

  const randomCat = {
    name: catName,
    age: catAge,
    gender: catGender,
    legsCount: catLegsCount,
    tailLength: catTailLength,
  };
  return randomCat;
}


module.exports = {
  catFactory, name, age, gender, legsCount, tailLength,
};
