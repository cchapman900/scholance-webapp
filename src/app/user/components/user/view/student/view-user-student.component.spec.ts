import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserStudentComponent } from './view-user-student.component';

describe('ViewUserStudentComponent', () => {
  let component: ViewUserStudentComponent;
  let fixture: ComponentFixture<ViewUserStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
