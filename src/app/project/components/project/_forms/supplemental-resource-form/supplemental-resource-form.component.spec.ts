import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementalResourceFormComponent } from './supplemental-resource-form.component';

describe('SupplementalResourceFormComponent', () => {
  let component: SupplementalResourceFormComponent;
  let fixture: ComponentFixture<SupplementalResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementalResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementalResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
