import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AuthService } from '../user/auth/services/auth.service';
import {UserService} from '../user/services/user.service';
import {User} from '../user/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;

  constructor(
    public auth: AuthService,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    if (this.auth.isAuthenticated()) {
      this.userService.authenticatedUser$.subscribe((user) => {
        this.user = user.email;
      })
    }
  }

}
