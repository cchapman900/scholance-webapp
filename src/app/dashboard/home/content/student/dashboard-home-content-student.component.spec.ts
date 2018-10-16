import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeContentStudentComponent } from './dashboard-home-content-student.component';

describe('DashboardHomeContentStudentComponent', () => {
  let component: DashboardHomeContentStudentComponent;
  let fixture: ComponentFixture<DashboardHomeContentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeContentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeContentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
