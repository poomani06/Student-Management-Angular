import { Injectable } from '@angular/core';

export interface StudentRec {
  id: number;
  name: string;
  age: number;
  department: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudent(student: StudentRec) {

    let students: StudentRec[] = JSON.parse(
      localStorage.getItem('students') || '[]'
    );

    students.push(student);

    localStorage.setItem(
      'students',
      JSON.stringify(students)
    );

  }

  getStudent(): StudentRec[] {

    return JSON.parse(
      localStorage.getItem('students') || '[]'
    );

  }

}