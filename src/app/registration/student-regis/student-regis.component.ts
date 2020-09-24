import { Component, EventEmitter, Output } from '@angular/core';


import { Student } from '../student-list/student.model'

@Component({
  selector: 'app-student-regis',
  templateUrl: './student-regis.component.html',
  styleUrls: ['./student-regis.component.css']
})
export class StudentRegisComponent {

  studentName = "";
  studentDis = "";
  @Output() studentCreated = new EventEmitter<Student>();


  saveStudent() {

    const student: Student = {
      name: this.studentName,
      dis: this.studentDis
    }

    this.studentCreated.emit(student);
  }

}
