import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonWorkbenchComponent } from './liaison-workbench.component';

describe('LiaisonWorkbenchComponent', () => {
  let component: LiaisonWorkbenchComponent;
  let fixture: ComponentFixture<LiaisonWorkbenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiaisonWorkbenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
