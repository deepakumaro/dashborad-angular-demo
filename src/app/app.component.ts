import { Component } from '@angular/core';

import { Student } from './registration/student-list/student.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [];

  onStudentAdded(student) {
    this.students.push(student)
  }

}
