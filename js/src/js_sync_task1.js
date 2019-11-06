export {pick};


function pick (list){
    let listLen = list.length;
    let position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
}

console.log(pick([50, 120, 1, 0, 12323, 12345]))