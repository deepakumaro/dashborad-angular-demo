import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [];
  private studentListUptade = new Subject<Student[]>();

  constructor(private http: HttpClient) {}

  getStudents() {
    this.http.get<{msg: string, list : Student[]}>('http://localhost:3000/api/studentList')
    .subscribe((list)=>{
     this.students= list.list
     this.studentListUptade.next([...this.students]);
    })
  }

  getStudentUpdateListner() {
    return this.studentListUptade.asObservable();
  }

  addStudents(_id:string,name: string, dis: string) {
    const student: Student = {_id:null,name: name, dis: dis };

    this.http.post<{msg:string,_id:string}>('http://localhost:3000/api/student',student).subscribe(
      (msg)=>{
        console.log(msg);
        student._id = msg._id;
        this.students.push(student);

        this.studentListUptade.next([...this.students]);
      }

    )


  }

  deleteStudent(studentId: string){
    this.http.delete('http://localhost:3000/api/student/'+studentId).subscribe(
      ()=>{
        const UpdatedStudent = this.students.filter(student => student._id !== studentId);
        this.students = UpdatedStudent;
        this.studentListUptade.next([...this.students]);
      }
    )
  }
}
