'use strict';

/* eslint-disable no-shadow */
var jsTask3 = require('./js_sync_task3');

var catsArr = jsTask3.catsGroupGenerate(999);

function findGenderM(catsArr) {
  return catsArr.filter(function (cat) {
    return cat.gender === 'M';
  });
}

function findGenderW(catsArr) {
  return catsArr.filter(function (cat) {
    return cat.gender === 'W';
  });
}

function getNames(catsArr) {
  var catsNames = [];

  catsArr.forEach(function (item) {
    var catName = Object.values(item)[0];
    catsNames.push(catName);
  });
  return catsNames;
}

function oldestCatsM(catsArr, n) {
  var oldestCatsList = [];
  oldestCatsList = catsArr.filter(function (cat) {
    return cat.gender === 'M';
  }).sort(function (a, b) {
    return b.age - a.age;
  }).slice(0, n);
  return oldestCatsList;
}

function youngestCatsW(catsArr, n) {
  var youngestCatsList = [];
  youngestCatsList = catsArr.filter(function (cat) {
    return cat.gender === 'W';
  }).sort(function (a, b) {
    return a.age - b.age;
  }).slice(0, n);
  return youngestCatsList;
}

module.exports = {
  catsArr: catsArr, findGenderM: findGenderM, findGenderW: findGenderW, getNames: getNames, oldestCatsM: oldestCatsM, youngestCatsW: youngestCatsW
};