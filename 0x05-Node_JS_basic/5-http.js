const http = require('http');
const countStudents = require('./3-read_file_async');

const captureLogs = (fn, ...args) => {
  const originalLog = console.log;
  let logs = '';

  console.log = (message) => {
    logs += `${message}\n`;
  };

  return fn(...args)
    .then(() => {
      console.log = originalLog;
      return logs.trim();
    })
    .catch((error) => {
      console.log = originalLog;
      throw error;
    });
};

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];

    captureLogs(countStudents, databasePath)
      .then((logs) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${logs}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
