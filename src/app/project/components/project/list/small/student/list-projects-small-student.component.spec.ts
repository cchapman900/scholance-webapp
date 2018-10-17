import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectsSmallStudentComponent } from './list-projects-small-student.component';

describe('ListProjectsSmallStudentComponent', () => {
  let component: ListProjectsSmallStudentComponent;
  let fixture: ComponentFixture<ListProjectsSmallStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectsSmallStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectsSmallStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
