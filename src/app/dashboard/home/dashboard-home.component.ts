import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/services/user.service';
import {Project} from '../../project/models/project.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  activeProjects: Project[];
  completedProjects: Project[];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.activeProjects = user.projects.filter(project => project.status === 'active');
        this.completedProjects = user.projects.filter(project => project.status === 'complete');
      })
  }

  // Add in some informational stuff here

}
