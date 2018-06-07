import {Component} from '@angular/core';
import {AuthService} from './user/auth/auth.service';
import {UserService} from './user/services/user.service';
import {User} from './user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(public auth: AuthService,
              private userService: UserService) {
    auth.handleAuthentication();
    if (auth.isAuthenticated()) {
      this.userService.setAuthenticatedUser(auth.getAuthenticatedUserId());
      this.userService.authenticatedUser$.subscribe((user) => {
        this.user = user;
      });
      console.log(localStorage.getItem('access_token'));
    }
  }

}
