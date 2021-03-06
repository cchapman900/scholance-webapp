import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import {SharedService} from '../../shared/services/shared.service';
import {MessageService} from '../../messages/message.service';

@Injectable()
export class UserService extends SharedService {
  public authenticatedUser$: Observable<User>;
  public authenticatedUser: User; // Trying this out instead of having to do the subscriber

  constructor(
    private http: HttpClient,
    protected messageService: MessageService
  ) {
    super(messageService);
  }

  /**
   * Set the authenticated user singleton
   * @param {string} id
   */
  setAuthenticatedUser (id: string): void {

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
    const getUserUrl = `${this.scholanceApiDomain}/users/${id}`;
    return this.http.get<User>(getUserUrl)
      .pipe(
        tap(user => { }),
        catchError(this.handleError<User>('getUser'))
      );
  }

  /**
   * UPDATE User
   * @param {User} user
   * @returns {Observable<User>}
   */
  updateUser (user: User): Observable<User> {
    const updateUserUrl = `${this.scholanceApiDomain}/users/${user._id}`;
    return this.http.put<User>(updateUserUrl, user, {headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })})
      .pipe(
        tap(updatedUser => {
          this.log('Successfully updated profile', 'success');
        }),
        catchError(this.handleError<User>('updateUser'))
      );
  }

  /**
   * UPDATE Completed Projects
   * @param {User} user
   * @param {[any]} portfolioEntries
   * @returns {Observable<User>}
   */
  updatePortfolioEntries (user: User, portfolioEntries: [any]): Observable<User> {
    const updatePortfolioEntriesUrl = `${this.scholanceApiDomain}/users/${user._id}/completed-projects`;
    return this.http.put<User>(updatePortfolioEntriesUrl, {portfolioEntries: portfolioEntries}, this.httpOptions)
      .pipe(
        tap(updatedUser => {
          this.log('Successfully updated portfolio', 'success');
        }),
        catchError(this.handleError<User>('updatePortfolioEntries'))
      );
  }

  /**************************
   * Helper Methods
   **************************/

  getNumActiveProjects (user: User): number {
    const activeProjects = user.projects.filter(project => project.status === 'active');
    return activeProjects.length;
  }

}
