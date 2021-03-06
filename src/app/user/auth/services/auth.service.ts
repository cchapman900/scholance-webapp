import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_CONFIG } from '../auth0-variables';
import * as auth0 from 'auth0-js';
import * as jwt_decode from 'jwt-decode'
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {SharedService} from '../../../shared/services/shared.service';
import {MessageService} from '../../../messages/message.service';

@Injectable()
export class AuthService extends SharedService {

  requestedScopes = 'openid profile manage:project manage:entry manage:organization';

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    audience: AUTH_CONFIG.apiUrl,
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.callbackURL,
    responseType: 'token id_token',
    scope: this.requestedScopes
  });

  userProfile: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public messageService: MessageService,
    private userService: UserService
  ) {
    super(messageService);
  }

  public login(email: string, password: string): void {
    this.auth0.login({
      realm: 'Username-Password-Authentication',
      email,
      password
    }, (err, authResult) => {
      if (err) {
        this.log(`Login failed: ${err.error_description}`, 'danger');
        return;
      } else if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      }
    });
  }

  public signup(name: string, email: string, password: string, userType: string): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email: email,
      password: password,
      user_metadata: {
        name: name,
        user_type: userType
      }
    }, err => {
      if (err) {
        this.log(`Signup failed: ${JSON.stringify(err.description)}`, 'danger');
        return;
      }
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/dashboard']);

        this.log(`Authentication failed: ${err.error_description}`, 'danger');
      }
    });
  }

  private setSession(authResult): void {
    const user_id = this.parseUserIdFromIdToken(authResult.idToken);
    const scopes = authResult.scope || this.requestedScopes || '';
    this.userService.setAuthenticatedUser(user_id);
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      (authResult.expiresIn * 1000) + new Date().getTime()
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', scopes);
    this.refreshHttpOptions();
    this.router.navigate(['/dashboard']);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    // Go back to the home route
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getAuthenticatedUserId(): string {
    if (this.isAuthenticated()) {
      return this.parseUserIdFromIdToken(localStorage.getItem('id_token'));
    } else {
      return null;
    }
  }

  public resetPassword(email: string) {
    const url = `${this.auth0.baseOptions.rootUrl}/dbconnections/change_password`;
    const request = {
      client_id: this.auth0.baseOptions.clientID,
      email: email,
      connection: 'Username-Password-Authentication'
    };

    this.http.post(url, request, {responseType: 'text'})
      .subscribe((response) => {
        this.log(response, 'success');
        this.router.navigate(['login'])
      });
  }

  private parseUserIdFromIdToken(id_token: string): string {
    const decoded = jwt_decode(id_token);
    const sub = decoded.sub;
    return sub.split('|')[1];
  }

  // Get Profile
  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = localStorage.getItem('scopes').split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

}
