import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectAgreementComponent } from './create-project-agreement.component';

describe('CreateProjectAgreementComponent', () => {
  let component: CreateProjectAgreementComponent;
  let fixture: ComponentFixture<CreateProjectAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
