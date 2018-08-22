import { Component, OnInit } from '@angular/core';
import { faUser, faHome, faBuilding, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../user/services/user.service';
import {Project} from '../../project/models/project.model';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: [
    '../../../assets/css/sidebar.css',
    './dashboard-sidebar.component.css'
  ]
})
export class DashboardSidebarComponent implements OnInit {
  faUser = faUser;
  faHome = faHome;
  faBuilding = faBuilding;
  faAddressCard = faAddressCard;

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

}
