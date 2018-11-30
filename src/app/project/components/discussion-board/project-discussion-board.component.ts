import { Component, OnInit } from '@angular/core';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../user/auth/services/auth.service';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-discussion-board',
  templateUrl: './project-discussion-board.component.html',
  styleUrls: ['./project-discussion-board.component.css']
})
export class ProjectDiscussionBoardComponent implements OnInit {
  project: Project;
  projectId: string;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  showComments: boolean;

  constructor(
    public authService: AuthService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('project_id');
    this.showComments = true;
    this.getProject();
  }

  getProject(): void {
    this.projectService.getProject(this.projectId)
      .subscribe((project) => {
        this.project = project;
        this.setTitle(project.title)
      })
  }

  setTitle(title: string) {
    this.titleService.setTitle(`Scholance | ${title}`)
  }

}
