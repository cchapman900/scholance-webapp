import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchSubmissionComponent } from './workbench-submission.component';

describe('WorkbenchSubmissionComponent', () => {
  let component: WorkbenchSubmissionComponent;
  let fixture: ComponentFixture<WorkbenchSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
