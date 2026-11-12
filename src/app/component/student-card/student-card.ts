import { Component, Input } from '@angular/core';
import { StudentRec } from '../../service/student';

@Component({
  selector: 'app-student-card',
  imports: [],
  standalone: true,
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {

  @Input() student!: StudentRec;

}