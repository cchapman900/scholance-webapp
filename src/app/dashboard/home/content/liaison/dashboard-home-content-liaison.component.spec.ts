import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeContentLiaisonComponent } from './dashboard-home-content-liaison.component';

describe('DashboardHomeContentLiaisonComponent', () => {
  let component: DashboardHomeContentLiaisonComponent;
  let fixture: ComponentFixture<DashboardHomeContentLiaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeContentLiaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeContentLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
