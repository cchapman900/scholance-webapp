import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import {SharedService} from '../../shared/services/shared.service';

@Injectable()
export class UserService extends SharedService {

  private usersServiceAPIUrl = 'https://5jnzq5gaii.execute-api.us-east-1.amazonaws.com/dev';
  public authenticatedUser$: Observable<User>;
  public authenticatedUser: User; // Trying this out instead of having to do the subscriber

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
    this.authenticatedUser$
      .subscribe((user) => {
        this.authenticatedUser = user;
      })
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
    const cachedUser = <User>JSON.parse(localStorage.getItem('user'));
    if (cachedUser && cachedUser._id === id) {
      return Observable.of(cachedUser);
    } else {
      const getUserUrl = `${this.usersServiceAPIUrl}/users/${id}`;
      return this.http.get<User>(getUserUrl)
        .pipe(
          tap(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.log(`fetched user id=${id}`)
          }),
          catchError(this.handleError<User>('getUser'))
        );
    }
  }


  /**
   * UPDATE User
   * @param {User} user
   * @returns {Observable<User>}
   */
  updateUser (user: User): Observable<User> {
    console.log(user);
    const updateUserUrl = `${this.usersServiceAPIUrl}/users/${user._id}`;
    console.log(this.httpOptions);
    return this.http.put<User>(updateUserUrl, user, this.httpOptions)
      .pipe(
        tap(updatedUser => {
          this.log(`fetched user=${updatedUser}`);
          localStorage.removeItem('user');
        }),
        catchError(this.handleError<User>('updateUser'))
      );
  }

}
