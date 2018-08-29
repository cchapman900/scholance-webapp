import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../user/auth/services/auth.service';
import {UserService} from '../../../user/services/user.service';
import {Project} from '../../../project/models/project.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  activeProjects: Project[];
  completedProjects: Project[];


  constructor(
    public auth: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
    if (this.userService.authenticatedUser$) {
      this.userService.authenticatedUser$
        .subscribe((user) => {
          this.activeProjects = user.projects.filter(project => project.status === 'active');
          this.completedProjects = user.projects.filter(project => project.status === 'complete');
        })
    }
  }

}
