import {Component} from '@angular/core';
import {AuthService} from './user/auth/services/auth.service';
import {UserService} from './user/services/user.service';
import {User} from './user/models/user.model';
import {NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  isFullWidth: boolean;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private router: Router,
    private titleService: Title
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
        if (this.router.url === '/' || this.router.url.startsWith('/dashboard') || this.router.url.startsWith('/workbench')) {
          this.isFullWidth = true;
        } else {
          this.isFullWidth = false;
        }
      }
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
