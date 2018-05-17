import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import {SharedService} from '../../shared/services/shared.service';

@Injectable()
export class UserService extends SharedService {

  private usersServiceAPIUrl = 'https://5jnzq5gaii.execute-api.us-east-1.amazonaws.com/dev';
  public authenticatedUser$: Observable<User>;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  /**
   * Set the authenticated user singleton
   * @param {string} id
   */
  setAuthenticatedUser (id: string): void {
    console.log('Setting user for ' + id);
    this.authenticatedUser$ = this.getUser(id);
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /**
   * GET User
   * @param {string} id
   * @returns {Observable<User>}
   */
  getUser (id: string): Observable<User> {
    const getUserUrl = `${this.usersServiceAPIUrl}/users/${id}`;
    return this.http.get<User>(getUserUrl)
      .pipe(
        tap(user => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>('getUser'))
      );
  }


  /**
   * UPDATE User
   * @param {User} user
   * @returns {Observable<User>}
   */
  updateUser (user: User): Observable<User> {
    const updateUserUrl = `${this.usersServiceAPIUrl}/users/${user._id}`;
    console.log(this.httpOptions);
    return this.http.put<User>(updateUserUrl, user, this.httpOptions)
      .pipe(
        tap(updatedUser => this.log(`fetched user=${updatedUser}`)),
        catchError(this.handleError<User>('updateUser'))
      );
  }

}
