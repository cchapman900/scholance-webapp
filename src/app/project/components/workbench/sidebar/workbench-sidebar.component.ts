import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../user/services/user.service';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-workbench-sidebar',
  templateUrl: './workbench-sidebar.component.html',
  styleUrls: [
    '../../../../../assets/css/sidebar.css',
    './workbench-sidebar.component.css'
  ]
})
export class WorkbenchSidebarComponent implements OnInit {
  @Input() project: Project;
  @Input() showSidebar: boolean;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
