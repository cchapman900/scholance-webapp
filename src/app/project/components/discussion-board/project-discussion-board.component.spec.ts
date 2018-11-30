import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDiscussionBoardComponent } from './project-discussion-board.component';

describe('ProjectDiscussionBoardComponent', () => {
  let component: ProjectDiscussionBoardComponent;
  let fixture: ComponentFixture<ProjectDiscussionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDiscussionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDiscussionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
