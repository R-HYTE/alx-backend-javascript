const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

userInput.on('line', (name) => {
  process.stdout.write(`Your name is: ${name}\r`);
  userInput.close();
});

userInput.on('close', () => {
  console.log('\nThis important software is now closing');
  process.exit(0);
});
