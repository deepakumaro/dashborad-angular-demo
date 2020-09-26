import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [];
  private studentListUptade = new Subject<Student[]>();

  getStudents() {
    return [...this.students];
  }

  getStudentUpdateListner() {
    return this.studentListUptade.asObservable();
  }

  addStudents(name: string, dis: string) {
    const student: Student = { name: name, dis: dis };

    this.students.push(student);

    this.studentListUptade.next([...this.students]);
  }
}
