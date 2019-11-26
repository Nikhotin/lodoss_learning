function pick(list) {
  const position = Math.floor(Math.random() * list.length);

  return list[position];
}

module.exports.pick = pick;
