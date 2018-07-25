import { Component, OnInit } from '@angular/core';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../user/services/user.service';

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

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
