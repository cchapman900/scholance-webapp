import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../../user/auth/services/auth.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectSignupAgreementComponent} from './student-project-toolbar/project-signup-agreement/project-signup-agreement.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  project: Project;
  showComments: boolean;
  projectId: string;

  constructor(
    public authService: AuthService,
    private projectService: ProjectService,
    public userService: UserService,
    private route: ActivatedRoute,
    protected router: Router,      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
    private titleService: Title
  ) {
    this.projectId = this.route.snapshot.paramMap.get('project_id');
  }

  ngOnInit() {
    this.getProject();
    this.showComments = true;
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
