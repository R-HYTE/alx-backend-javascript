const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.trim() !== '');

    // Skip the first line if it's a header
    if (data.length > 0 && data[0].includes('firstname,lastname,age,field')) {
      data.shift(); // Remove the header line
    }

    /* eslint-disable no-unused-vars */
    const csStudents = [];
    const sweStudents = [];
    /* eslint-disable no-unused-vars */

    data.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',').map((item) => item.trim());

      if (field === 'CS') {
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweStudents.push(firstname);
      }
    });

    console.log(`Number of students: ${data.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
