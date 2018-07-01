import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectToolbarComponent } from './student-project-toolbar.component';

describe('StudentProjectToolbarComponent', () => {
  let component: StudentProjectToolbarComponent;
  let fixture: ComponentFixture<StudentProjectToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProjectToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
