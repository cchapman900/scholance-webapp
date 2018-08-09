import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEntryWorkAreaComponent } from './student-entry-work-area.component';

describe('StudentEntryWorkAreaComponent', () => {
  let component: StudentEntryWorkAreaComponent;
  let fixture: ComponentFixture<StudentEntryWorkAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEntryWorkAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEntryWorkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
