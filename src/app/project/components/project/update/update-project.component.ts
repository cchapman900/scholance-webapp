import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../models/project.model';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  project: Project;
  liaison: User;
  submitted = false;
  onSubmit() { this.submitted = true; }

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
        this.liaison = user;
      })
  }

  getProject(id: string): void {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
      })
  }

  updateProject(): void {
    this.submitted = true;
    // TODO: Is this really necessary?
    this.project.liaison = this.liaison._id;
    console.log(this.liaison.organization);
    this.project.organization = {
      _id: this.liaison.organization._id,
      name: this.liaison.organization.name
    };
    this.projectService.updateProject(this.project)
      .subscribe(() => {
        // this.goBack()
      });
  }

  deleteProject(): void {
    this.submitted = true;
    this.projectService.deleteProject(this.project._id)
      .subscribe(() => {
        // this.goBack()
      });
  }

  deleteSupplementalResource(project_id: string, asset_id: string) {
    this.projectService.deleteSupplementalResource(project_id, asset_id)
  }

}
