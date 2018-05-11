import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_CONFIG } from './auth0-variables';
import * as auth0 from 'auth0-js';
import * as jwt_decode from 'jwt-decode'
import {UserService} from '../user.service';

@Injectable()
export class AuthService {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.callbackURL,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  userProfile: any;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  public login(username: string, password: string): void {
    this.auth0.login({
      realm: 'Username-Password-Authentication',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        console.log(err);
        alert(`Error: ${err.error_description}. Check the console for further details.`);
        return;
      } else if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      }
    });
  }

  public signup(email: string, password: string, userType: string): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email: email,
      password: password,
      user_metadata: {user_type: userType}
    }, err => {
      if (err) {
        console.log(err);
        alert(`Error: ${err.description}. Check the console for further details.`);
        return;
      }
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        const user_id = this.parseUserIdFromIdToken(authResult.idToken);
        this.userService.setAuthenticatedUser(user_id);
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      (authResult.expiresIn * 1000) + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.router.navigate(['home']);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
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

}
