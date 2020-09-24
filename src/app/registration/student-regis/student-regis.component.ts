import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


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


  saveStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const student: Student = {
      name: form.value.studentName,
      dis: form.value.studentDis
    }

    this.studentCreated.emit(student);
  }

}
