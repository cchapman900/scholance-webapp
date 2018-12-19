import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../user/services/user.service';
import {AuthService} from '../../../../user/auth/services/auth.service';
import {Title} from '@angular/platform-browser';
import {faInfoCircle, faLink, faImage, faNewspaper} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  project: Project;
  projectId: string;
  faInfoCircle = faInfoCircle;
  faLink = faLink;
  faImage = faImage;
  faNewspaper = faNewspaper;

  constructor(
    public authService: AuthService,
    private projectService: ProjectService,
    public userService: UserService,
    private route: ActivatedRoute,
    protected router: Router,      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('project_id');
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
