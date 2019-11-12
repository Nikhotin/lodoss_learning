function pick(list) {
    let position = Math.floor(Math.random() * list.length);
    
    return list[position];
    }

module.exports.pick = pick;
