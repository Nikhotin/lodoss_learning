"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pick = pick;


function pick(list) {
    var listLen = list.length;
    var position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
}

console.log(pick([50, 120, 1, 0, 12323, 12345]));