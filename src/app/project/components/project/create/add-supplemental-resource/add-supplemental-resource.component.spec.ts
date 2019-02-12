import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplementalResourceComponent } from './add-supplemental-resource.component';

describe('AddSupplementalResourceComponent', () => {
  let component: AddSupplementalResourceComponent;
  let fixture: ComponentFixture<AddSupplementalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplementalResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplementalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
