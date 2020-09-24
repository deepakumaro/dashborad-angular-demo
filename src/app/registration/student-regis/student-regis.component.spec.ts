import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisComponent } from './student-regis.component';

describe('StudentRegisComponent', () => {
  let component: StudentRegisComponent;
  let fixture: ComponentFixture<StudentRegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
