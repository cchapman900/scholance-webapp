import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

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

  constructor(
    private projectService: ProjectService,
    public userService: UserService,
    private route: ActivatedRoute,
    protected router: Router      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
  ) { }

  ngOnInit() {
    const project_id = this.route.snapshot.paramMap.get('project_id');
    this.getProject(project_id);
    this.showComments = false;
  }

  getProject(id: string): void {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
      })
  }

  studentIsRegisteredForProject(): boolean {
    const studentIsRegistered = this.project.entries.some(entry => entry.student._id === this.userService.authenticatedUser._id);
    return studentIsRegistered;
  }

  studentSignup() {
    this.projectService.createEntry(this.project._id)
      .subscribe((response) => {
        console.log(response);
      })
  }

  studentSignoff() {
    this.projectService.deleteEntry(this.project._id, this.userService.authenticatedUser._id)
      .subscribe((response) => {
        console.log(response);
      })
  }

}
