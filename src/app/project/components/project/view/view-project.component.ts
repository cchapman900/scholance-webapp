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
  user: User;
  showComments: boolean;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute,
    protected router: Router      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
  ) { }

  ngOnInit() {
    const project_id = this.route.snapshot.paramMap.get('project_id');
    this.getProject(project_id);
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      });

    this.showComments = false;
  }

  getProject(id: string): void {
    const cachedProject = <Project>JSON.parse(localStorage.getItem('project'));
    if (cachedProject && cachedProject._id === id) {
      console.log('project loaded from cache');
      this.project = cachedProject;
    } else {
      this.projectService.getProject(id)
        .subscribe((project) => {
          this.project = project;
        })
    }
  }

  studentIsRegisteredForProject(): boolean {
    return this.project.entries.some(entry => entry.student._id === this.user._id)
  }

}
