// Define the 'Student' Interface
export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

// Create two Students
const student1: Student = {
    firstName: "Ryan",
    lastName: "King",
    age: 20,
    location: "Nairobi, Kenya"
}; 
const student2: Student = {
    firstName: "Poly",
    lastName: "Rhyte",
    age: 24,
    location: "Nairobi, Kenya"
};

// Create an Array containing the students
const studentsList: Student[] = [student1, student2];

// Render a table using vanilla javascript
function renderTable(students: Student[]): void {
    // Create a table element
    const table = document.createElement('table');
  
    // Add a table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const firstNameHeader = headerRow.insertCell();
    firstNameHeader.textContent = "First Name";
    const locationHeader = headerRow.insertCell();
    locationHeader.textContent = "Location";
  
    // Add the body of the table
    const tbody = table.createTBody();
    students.forEach(student => {
      const row = tbody.insertRow();
      const firstNameCell = row.insertCell();
      firstNameCell.textContent = student.firstName;
      const locationCell = row.insertCell();
      locationCell.textContent = student.location;
    });
  
    // Append the table to the document body (or to a specific div if preferred)
    document.body.appendChild(table);
}
  
// Call the function with the students list
renderTable(studentsList);
