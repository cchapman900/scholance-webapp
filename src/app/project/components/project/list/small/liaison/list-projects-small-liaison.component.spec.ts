import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectsSmallLiaisonComponent } from './list-projects-small-liaison.component';

describe('ListProjectsSmallLiaisonComponent', () => {
  let component: ListProjectsSmallLiaisonComponent;
  let fixture: ComponentFixture<ListProjectsSmallLiaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectsSmallLiaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectsSmallLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
