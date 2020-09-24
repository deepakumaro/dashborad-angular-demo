import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-regis',
  templateUrl: './student-regis.component.html',
  styleUrls: ['./student-regis.component.css']
})
export class StudentRegisComponent {

  studentName = "";
  studentDis = "";
  @Output() studentCreated = new EventEmitter();


  saveStudent() {

    const student = {
      name: this.studentName,
      dis: this.studentDis
    }

    this.studentCreated.emit(student);
  }

}
