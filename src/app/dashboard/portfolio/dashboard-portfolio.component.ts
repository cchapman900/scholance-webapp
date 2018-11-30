import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/services/user.service';

@Component({
  selector: 'app-dashboard-portfolio',
  templateUrl: './dashboard-portfolio.component.html',
  styleUrls: ['./dashboard-portfolio.component.css']
})
export class DashboardPortfolioComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
