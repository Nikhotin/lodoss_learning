"use strict";

function pick(list) {
  var position = Math.floor(Math.random() * list.length);

  return list[position];
}

module.exports.pick = pick;