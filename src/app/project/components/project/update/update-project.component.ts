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
  ) {
    const id = this.route.snapshot.paramMap.get('project_id');
    this.getProject(id);
  }

  ngOnInit() {
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

  deleteSupplementalResource(asset_id: string) {
    this.projectService.deleteAsset('supplementalResource', this.project._id, asset_id)
      .subscribe((response) => {
        console.log(response)
      })
  }

}
