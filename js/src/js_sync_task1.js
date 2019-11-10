module.exports = {
    pick : (list) => {
    let listLen = list.length;
    let position = Math.floor(Math.random() * Math.floor(listLen));
    return list[position];
    }
}
