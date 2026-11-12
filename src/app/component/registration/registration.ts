import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService, StudentRec } from '../../service/student';

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

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  registerStudent() {

    if (this.studentAge === null) {
      return;
    }

    const student: StudentRec = {
      id: Date.now(),
      name: this.studentName,
      age: this.studentAge,
      department: this.department,
      email: this.email
    };

    this.studentService.addStudent(student);

    alert('Student registered successfully!');

    this.studentName = '';
    this.studentAge = null;
    this.department = '';
    this.email = '';

    this.router.navigate(['/student-list']);

  }

}