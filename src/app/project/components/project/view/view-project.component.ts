import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  project: Project;
  user: User;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('project_id');
    this.getProject(id);
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      })
  }

  getProject(id: string): void {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
      })
  }

  studentIsRegisteredForProject(): boolean {
    return this.project.entries.some(entry => entry.student._id === this.user._id)
  }

}
