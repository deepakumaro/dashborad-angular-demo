import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentList: Student[] = [];

  private studentSub: Subscription;

  constructor(public studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents();

    this.studentSub = this.studentService
      .getStudentUpdateListner()
      .subscribe((studentList: Student[]) => {
        this.studentList = studentList;
      });
  }

  onDelete(studentId: string) {
    this.studentService.deleteStudent(studentId);
  }
  ngOnDestroy() {
    this.studentSub.unsubscribe();
  }
}
