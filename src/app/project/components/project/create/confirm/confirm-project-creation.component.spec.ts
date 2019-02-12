import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProjectCreationComponent } from './confirm-project-creation.component';

describe('ConfirmProjectCreationComponent', () => {
  let component: ConfirmProjectCreationComponent;
  let fixture: ComponentFixture<ConfirmProjectCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProjectCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmProjectCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
