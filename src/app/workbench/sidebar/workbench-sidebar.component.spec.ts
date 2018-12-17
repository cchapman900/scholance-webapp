import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchSidebarComponent } from './workbench-sidebar.component';

describe('WorkbenchSidebarComponent', () => {
  let component: WorkbenchSidebarComponent;
  let fixture: ComponentFixture<WorkbenchSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
