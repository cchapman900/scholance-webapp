import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementalResourceComponent } from './supplemental-resource.component';

describe('SupplementalResourceComponent', () => {
  let component: SupplementalResourceComponent;
  let fixture: ComponentFixture<SupplementalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementalResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
