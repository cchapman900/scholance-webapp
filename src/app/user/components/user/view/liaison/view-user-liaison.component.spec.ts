import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserLiaisonComponent } from './view-user-liaison.component';

describe('ViewUserLiaisonComponent', () => {
  let component: ViewUserLiaisonComponent;
  let fixture: ComponentFixture<ViewUserLiaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserLiaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
