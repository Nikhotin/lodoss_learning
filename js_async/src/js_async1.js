const EventEmitter = require('events');

const greetings = ['Hello', 'Hi', 'Yo'];
const feelings = ['Fine,thx', 'Not bad', 'Im tired'];
const businesses = ['Im eat', 'Im drink', 'Im work', 'Nothing'];
function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createBasicBot() {
  const myEmitter = new EventEmitter();

  myEmitter.on('Hello', () => {
    const greeting = greetings[randInt(0, 2)];
    myEmitter.lastResult = greeting;
    console.log(`-${greeting}`);
  });
  myEmitter.on('How are you?', () => {
    const feeling = feelings[randInt(0, 2)];
    console.log(`-${feeling}`);
  });

  myEmitter.on('What are you doing?', () => {
    const business = businesses[randInt(0, 3)];
    console.log(`-${business}`);
  });

  return myEmitter;
}

const bot = createBasicBot();
console.log(bot.emit('Hello'));

module.exports = {
  createBasicBot,
  greetings,
  feelings,
  businesses,
};
