import {Component} from '@angular/core';
import {AuthService} from './user/auth/services/auth.service';
import {UserService} from './user/services/user.service';
import {User} from './user/models/user.model';
import {NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';

import { environment } from '../environments/environment';

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
    private titleService: Title,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {

    // Authentication Stuff
    auth.handleAuthentication();
    if (auth.isAuthenticated()) {
      this.userService.setAuthenticatedUser(auth.getAuthenticatedUserId());
      this.userService.authenticatedUser$.subscribe((user) => {
        this.user = user;
      });

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

    // Google Analytics stuff, gotten from
    this.appendGaTrackingCode();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitEvent('set', 'page', event.urlAfterRedirects);
        this.googleAnalyticsService.emitEvent('send', 'pageview');
      }
    });
  }


  // Google Analytics stuff, gotten from https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics
  private appendGaTrackingCode() {
    try {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '` + environment.googleAnalyticsKey + `', 'auto');
      `;
      document.head.appendChild(script);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
