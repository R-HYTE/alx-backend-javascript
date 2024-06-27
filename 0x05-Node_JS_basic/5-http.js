const http = require('http');
const fs = require('fs');

// Read CSV file asynchronously
function readCSVFile(databaseFile, callback) {
  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    // Splitting CSV into lines and filtering out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = {
      CS: [],
      SWE: [],
    };

    // Skip the first line assuming it's the header
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const parts = line.split(',');

      if (parts.length === 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();

        if (field === 'CS') {
          students.CS.push(firstname);
        } else if (field === 'SWE') {
          students.SWE.push(firstname);
        }
      }
    }

    callback(null, students);
  });
}

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error: Missing database file argument\n');
      return;
    }

    readCSVFile(databaseFile, (err, students) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Internal Server Error: ${err.message}\n`);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');

      // Total number of students
      const totalStudents = students.CS.length + students.SWE.length;
      res.write(`Number of students: ${totalStudents}\n`);

      // Listing students in CS
      const csCount = students.CS.length;
      res.write(`Number of students in CS: ${csCount}. List: ${students.CS.join(', ')}\n`);

      // Listing students in SWE
      const sweCount = students.SWE.length;
      res.end(`Number of students in SWE: ${sweCount}. List: ${students.SWE.join(', ')}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
