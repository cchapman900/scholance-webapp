import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../user/auth/services/auth.service';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
