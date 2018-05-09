import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from './auth/auth.service';
import { User } from './user.model';

@Injectable()
export class UserService {

  private usersUrl = 'https://5jnzq5gaii.execute-api.us-east-1.amazonaws.com/dev';
  public authenticatedUser$: Observable<User>;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    if (this.authService.isAuthenticated()) {
      const userId = this.authService.getAuthenticatedUserId();
      this.setAuthenticatedUser(userId);
    }
  }

  /** GET User */
  getUser (id: string): Observable<User> {
    const getUserUrl = `${this.usersUrl}/users/${id}`;
    return this.http.get<User>(getUserUrl)
      .pipe(
        tap(heroes => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>('getHeroes'))
      );
  }

  /**
   * Set the authenticated user singleton
   * @param {string} id
   */
  setAuthenticatedUser (id: string): void {
    this.authenticatedUser$ = this.getUser(id);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }

}
