import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSignupAgreementComponent } from './project-signup-agreement.component';

describe('ProjectSignupAgreementComponent', () => {
  let component: ProjectSignupAgreementComponent;
  let fixture: ComponentFixture<ProjectSignupAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSignupAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSignupAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
