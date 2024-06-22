const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

userInput.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  userInput.close();
});

userInput.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
