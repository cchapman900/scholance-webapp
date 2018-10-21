import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../user/models/user.model';
import {Project} from '../../../../project/models/project.model';

@Component({
  selector: 'app-dashboard-home-content-liaison',
  templateUrl: './dashboard-home-content-liaison.component.html',
  styleUrls: ['./dashboard-home-content-liaison.component.css']
})
export class DashboardHomeContentLiaisonComponent implements OnInit {
  @Input() user: User;
  @Input() activeProjects: Project[];
  @Input() profileIsComplete: boolean;

  constructor() { }

  ngOnInit() {
  }

}
