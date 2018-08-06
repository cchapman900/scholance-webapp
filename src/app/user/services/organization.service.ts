import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Organization} from '../models/organization.model';
import {SharedService} from '../../shared/services/shared.service';
import {User} from '../models/user.model';

@Injectable()
export class OrganizationService extends SharedService {

  private usersServiceAPIUrl = 'https://5jnzq5gaii.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http: HttpClient) {
    super();
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /* GET Organizations whose domain contains search term */
  listOrganizations(domain: string): Observable<Organization[]> {
    if (!domain.trim()) {
      // if not search term, return empty organization array.
      return of([]);
    }
    return this.http.get<Organization[]>(`${this.usersServiceAPIUrl}/organizations?domain=${domain}`).pipe(
      tap(_ => this.log(`found heroes matching "${domain}"`)),
      catchError(this.handleError<Organization[]>('listOrganizations', []))
    );
  }


  /**
   * GET Organization
   * @param {string} id
   * @returns {Observable<Organization>}
   */
  getOrganization (id: string): Observable<Organization> {
    const getOrganizationUrl = `${this.usersServiceAPIUrl}/organizations/${id}`;
    return this.http.get<Organization>(getOrganizationUrl)
      .pipe(
        tap(organization => {
          this.log(`fetched organization id=${id}`)
        }),
        catchError(this.handleError<Organization>('getOrganization'))
      );
  }


  /**
   * CREATE Organization
   * @param {Organization} organization
   * @returns {Observable<Organization>}
   */
  createOrganization (organization: Organization): Observable<Organization> {
    const createOrganizationUrl = `${this.usersServiceAPIUrl}/organizations`;
    console.log(organization);
    return this.http.post<Organization>(createOrganizationUrl, organization, this.httpOptions)
      .pipe(
        tap(createdOrganization => this.log(`fetched user=${createdOrganization}`)),
        catchError(this.handleError<Organization>('createOrganization'))
      );
  }


  /**
   * Update Organization
   * @param {Organization} organization
   * @returns {Observable<Organization>}
   */
  updateOrganization (organization: Organization): Observable<Organization> {
    const updateOrganizationUrl = `${this.usersServiceAPIUrl}/organizations/${organization._id}`;
    return this.http.put<Organization>(updateOrganizationUrl, organization, this.httpOptions)
      .pipe(
        tap(updatedOrganization => {
          this.log(`updated organization=${updatedOrganization}`);
        }),
        catchError(this.handleError<Organization>('updateOrganization'))
      );
  }


  /**
   * Add Liaison to Organization
   * @param {string} organization_id
   * @param {string} user_id
   * @returns {Observable<Organization>}
   */
  addUserToOrganization (organization_id: string, user_id: string): Observable<Organization> {
    const addUserToOrganizationUrl = `${this.usersServiceAPIUrl}/organizations/${organization_id}/users/${user_id}`;
    return this.http.post<Organization>(addUserToOrganizationUrl, null, this.httpOptions)
      .pipe(
        tap(updatedOrganization => {
          this.log(`fetched user=${updatedOrganization}`);
        }),
        catchError(this.handleError<Organization>('addUserToOrganization'))
      );
  }


  /**
   * Add Liaison to Organization
   * @param {string} organization_id
   * @param {string} user_id
   * @returns {Observable<Organization>}
   */
  removeUserFromOrganization (organization_id: string, user_id: string): Observable<Organization> {
    const addUserToOrganizationUrl = `${this.usersServiceAPIUrl}/organizations/${organization_id}/users/${user_id}`;
    return this.http.delete<Organization>(addUserToOrganizationUrl, this.httpOptions)
      .pipe(
        tap(updatedOrganization => {
          this.log(`fetched user=${updatedOrganization}`);
        }),
        catchError(this.handleError<Organization>('updateOrganization'))
      );
  }

}
