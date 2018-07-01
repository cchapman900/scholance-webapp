import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project.model';
import {User} from '../../../../user/models/user.model';
import {ProjectService} from '../../../services/project.service';
import {UserService} from '../../../../user/services/user.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: Project;
  liaison: User;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.project = new Project();
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.liaison = user;
        console.log(this.liaison.organization);
      })
  }

  create(): void {
    this.submitted = true;
    this.project.liaison._id = this.liaison._id;
    console.log(this.liaison.organization);
    this.project.organization = {
      _id: this.liaison.organization._id,
      name: this.liaison.organization.name
    };
    this.projectService.createProject(this.project)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
