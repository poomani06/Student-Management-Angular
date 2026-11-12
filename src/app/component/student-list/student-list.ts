import { Component, OnInit } from '@angular/core';
import { StudentService, StudentRec } from '../../service/student';

@Component({
  selector: 'app-student-list',
  imports: [],
  standalone: true,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: StudentRec[] = [];

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit() {

    this.students = this.studentService.getStudent();

  }

}

