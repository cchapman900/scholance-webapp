import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../user/auth/services/auth.service';
import {UserService} from '../../../user/services/user.service';
import {Project} from '../../../project/models/project.model';
import {User} from '../../../user/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;


  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {}

}
