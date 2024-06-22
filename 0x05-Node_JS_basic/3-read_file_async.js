const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length > 0 && lines[0].includes('firstname,lastname,age,field')) {
        lines.shift();
      }

      const csStudents = [];
      const sweStudents = [];

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',').map((item) => item.trim());

        if (field === 'CS') {
          csStudents.push(firstname);
        } else if (field === 'SWE') {
          sweStudents.push(firstname);
        }
      });

      console.log(`Number of students: ${lines.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
