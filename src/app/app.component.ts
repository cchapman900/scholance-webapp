import {Component} from '@angular/core';
import {AuthService} from './user/auth/services/auth.service';
import {UserService} from './user/services/user.service';
import {User} from './user/models/user.model';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  isHome: boolean;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {

    // Authentication Stuff
    auth.handleAuthentication();
    if (auth.isAuthenticated()) {
      this.userService.setAuthenticatedUser(auth.getAuthenticatedUserId());
      this.userService.authenticatedUser$.subscribe((user) => {
        this.user = user;
      });
      console.log(localStorage.getItem('access_token'));
    }

    // Taken from https://stackoverflow.com/questions/42538251/angular-2-get-current-route/42538483
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = this.router.url === '/';
      }
    });
  }

}
