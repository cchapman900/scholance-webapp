import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/services/user.service';
import {Project} from '../../project/models/project.model';
import {User} from '../../user/models/user.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  createdProjects: Project[];
  activeProjects: Project[];
  completedProjects: Project[];
  profileIsComplete: boolean;
  user: User;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
        if (user && user.projects) {
          this.createdProjects = user.projects.filter(project => project.status === 'created');
          this.activeProjects = user.projects.filter(project => project.status === 'active');
          this.completedProjects = user.projects.filter(project => project.status === 'complete');
        }
        this.profileIsComplete = this.getIfProfileIsComplete();
      })
  }

  getIfProfileIsComplete() {
    if (this.user && this.user.userType === 'student') {
      return true;
    } else if (this.user && this.user.userType === 'business' && this.user.organization) {
      return true;
    }
    return false;
  }

  // Add in some informational stuff here

}
