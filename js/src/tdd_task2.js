const jsTask1 = require('./js_sync_task1');

const name = ['Vasya', 'Barsik', 'Rizhik', 'Genadiy', 'Albert', 'Pyshok'];
const age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gender = ['M', 'W'];
const legsCount = [2, 3, 4];
const tailLength = ['10sm', '15sm', '20sm', '25sm', '30sm'];
const loudness = ['quiet', 'medium', 'loud'];

function catFactory() {
  const catName = jsTask1.pick(name);
  const catAge = jsTask1.pick(age);
  const catGender = jsTask1.pick(gender);
  const catLegsCount = jsTask1.pick(legsCount);
  const catTailLength = jsTask1.pick(tailLength);
  const catLoudness = jsTask1.pick(loudness);
  const randomCat = {
    name: catName,
    age: catAge,
    gender: catGender,
    legsCount: catLegsCount,
    tailLength: catTailLength,
    loudness: catLoudness,
  };
  return randomCat;
}

module.exports = {
  catFactory, name, age, gender, legsCount, tailLength, loudness,
};
