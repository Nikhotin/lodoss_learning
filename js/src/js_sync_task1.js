function pick(list) {
    let listLen = list.length;
    let position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
    }
    
module.exports.pick = pick;
