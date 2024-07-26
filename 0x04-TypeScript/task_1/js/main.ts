export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class Student implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new Student('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John
