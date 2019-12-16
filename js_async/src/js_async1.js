const EventEmitter = require('events');

const greetings = ['Hello', 'Hi', 'Yo'];
const feelings = ['Fine,thx', 'Not bad', 'Im tired'];
const businesses = ['Im eat', 'Im drink', 'Im work', 'Nothing'];
function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createBasicBot(str) {
  const myEmitter = new EventEmitter();
  let result;
  myEmitter.on('Hello', () => {
    const greeting = greetings[randInt(0, 2)];
    result = greeting;
    console.log(`-${greeting}`);
  });

  myEmitter.on('How are you?', () => {
    const feeling = feelings[randInt(0, 2)];
    result = feeling;
    console.log(`-${feeling}`);
  });

  myEmitter.on('What are you doing?', () => {
    const business = businesses[randInt(0, 3)];
    result = business;
    console.log(`-${business}`);
  });
  myEmitter.emit(str);
  return result;
}

module.exports = {
  createBasicBot,
  greetings,
  feelings,
  businesses,
};
