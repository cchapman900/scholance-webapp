import { Component } from '@angular/core';
import { AuthService } from './user/auth/auth.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    private userService: UserService
  ) {
    auth.handleAuthentication();
  }

}
