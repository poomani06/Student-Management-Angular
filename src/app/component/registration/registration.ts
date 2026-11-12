import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  studentName: string = '';
  studentAge: number | null = null;
  department: string = '';
  email: string = '';

  registerStudent() {

    const student = {
      id: Date.now(),
      name: this.studentName,
      age: this.studentAge,
      department: this.department,
      email: this.email
    };

    let students = JSON.parse(
      localStorage.getItem('students') || '[]'
    );

    students.push(student);

    localStorage.setItem(
      'students',
      JSON.stringify(students)
    );

    alert('Student registered successfully!');

    this.studentName = '';
    this.studentAge = null;
    this.department = '';
    this.email = '';
  }
}