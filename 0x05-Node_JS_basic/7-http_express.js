const express = require('express');
const { PassThrough } = require('stream');
const { StringDecoder } = require('string_decoder');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const outputStream = new PassThrough();
    const decoder = new StringDecoder('utf8');
    let outputData = '';

    outputStream.on('data', (chunk) => {
      outputData += decoder.write(chunk);
    });

    outputStream.on('end', () => {
      outputData += decoder.end();
      res.send(`This is the list of our students\n${outputData}`);
    });

    const originalConsoleLog = console.log;
    console.log = (...args) => {
      outputStream.write(`${args.join(' ')}\n`);
    };

    await countStudents(databasePath);

    outputStream.end();
    console.log = originalConsoleLog;
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
