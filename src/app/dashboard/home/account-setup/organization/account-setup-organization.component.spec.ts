import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupOrganizationComponent } from './account-setup-organization.component';

describe('AccountSetupOrganizationComponent', () => {
  let component: AccountSetupOrganizationComponent;
  let fixture: ComponentFixture<AccountSetupOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetupOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
