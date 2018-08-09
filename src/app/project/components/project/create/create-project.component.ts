import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {User} from '../../../../user/models/user.model';
import {ProjectService} from '../../../services/project.service';
import {UserService} from '../../../../user/services/user.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) {
    this.project = new Project();
  }

  ngOnInit() {
  }

  create(): void {
    this.project.liaison._id = this.userService.authenticatedUser._id;
    this.project.organization = {
      _id: this.userService.authenticatedUser.organization._id,
      name: this.userService.authenticatedUser.organization.name,
      about: this.userService.authenticatedUser.organization.about
    };
    this.projectService.createProject(this.project)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
