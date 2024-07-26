export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Create the createEmployee function
export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number') {
        return salary < 500 ? new Teacher() : new Director();
    } else {
        return new Director();
    }
}

// Define the isDirector type predicate
export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Define the executeWork function
export function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// String literal type for Subjects
export type Subjects = 'Math' | 'History';

// Define the teachClass function
export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

// Example usage
// console.log(teachClass('Math'));      // Output: Teaching Math
// console.log(teachClass('History'));   // Output: Teaching History
// executeWork(createEmployee(200));    // Output: Getting to work
// executeWork(createEmployee(1000));   // Output: Getting to director tasks
