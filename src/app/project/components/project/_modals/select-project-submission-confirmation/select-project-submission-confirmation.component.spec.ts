import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectSubmissionConfirmationComponent } from './select-project-submission-confirmation.component';

describe('SelectProjectSubmissionConfirmationComponent', () => {
  let component: SelectProjectSubmissionConfirmationComponent;
  let fixture: ComponentFixture<SelectProjectSubmissionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProjectSubmissionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjectSubmissionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
