const express = require('express');
const fs = require('fs');

const app = express();

// Read CSV file asynchronously
function readCSVFile(databaseFile, callback) {
  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        callback(new Error('Cannot load the database'), null);
      } else {
        callback(err, null);
      }
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

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];

  if (!databaseFile) {
    res.status(500).send('Internal Server Error: Missing database file argument');
    return;
  }

  readCSVFile(databaseFile, (err, students) => {
    if (err) {
      res.status(500).send('This is the list of our students\nCannot load the database');
      return;
    }

    let response = 'This is the list of our students\n';

    // Total number of students
    const totalStudents = students.CS.length + students.SWE.length;
    response += `Number of students: ${totalStudents}\n`;

    // Listing students in CS
    const csCount = students.CS.length;
    response += `Number of students in CS: ${csCount}. List: ${students.CS.join(', ')}\n`;

    // Listing students in SWE
    const sweCount = students.SWE.length;
    response += `Number of students in SWE: ${sweCount}. List: ${students.SWE.join(', ')}`;

    res.type('text/plain').send(response);
  });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
