import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  standalone: true,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: any[] = [];

  ngOnInit() {

    this.students = JSON.parse(
      localStorage.getItem('students') || '[]'
    );

  }

}