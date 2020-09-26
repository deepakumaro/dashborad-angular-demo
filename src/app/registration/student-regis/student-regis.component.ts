import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-regis',
  templateUrl: './student-regis.component.html',
  styleUrls: ['./student-regis.component.css']
})
export class StudentRegisComponent {

  studentName = "";
  studentDis = "";


  constructor(public studentService : StudentService){}

  saveStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }

   this.studentService.addStudents(form.value.studentName,form.value.studentDis);
   form.resetForm();

  }

}
