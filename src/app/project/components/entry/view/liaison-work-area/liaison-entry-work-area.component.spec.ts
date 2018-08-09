import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonEntryWorkAreaComponent } from './liaison-entry-work-area.component';

describe('LiaisonEntryWorkAreaComponent', () => {
  let component: LiaisonEntryWorkAreaComponent;
  let fixture: ComponentFixture<LiaisonEntryWorkAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiaisonEntryWorkAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonEntryWorkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
