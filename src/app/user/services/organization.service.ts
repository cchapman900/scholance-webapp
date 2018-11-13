import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Organization} from '../models/organization.model';
import {SharedService} from '../../shared/services/shared.service';
import {User} from '../models/user.model';
import {MessageService} from '../../messages/message.service';

@Injectable()
export class OrganizationService extends SharedService {

  constructor(
    private http: HttpClient,
    protected messageService: MessageService) {
    super(messageService);
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
    return this.http.get<Organization[]>(`${this.scholanceApiDomain}/organizations?domain=${domain}`).pipe(
      tap(_ => {}),
      catchError(this.handleError<Organization[]>('listOrganizations', []))
    );
  }


  /**
   * GET Organization
   * @param {string} id
   * @returns {Observable<Organization>}
   */
  getOrganization (id: string): Observable<Organization> {
    const getOrganizationUrl = `${this.scholanceApiDomain}/organizations/${id}`;
    return this.http.get<Organization>(getOrganizationUrl)
      .pipe(
        tap(organization => { }),
        catchError(this.handleError<Organization>('getOrganization'))
      );
  }


  /**
   * CREATE Organization
   * @param {Organization} organization
   * @returns {Observable<Organization>}
   */
  createOrganization (organization: Organization): Observable<Organization> {
    const createOrganizationUrl = `${this.scholanceApiDomain}/organizations`;
    console.log(organization);
    return this.http.post<Organization>(createOrganizationUrl, organization, this.httpOptions)
      .pipe(
        tap(createdOrganization => this.log('You successfully created an organization', 'success')),
        catchError(this.handleError<Organization>('createOrganization'))
      );
  }


  /**
   * Update Organization
   * @param {Organization} organization
   * @returns {Observable<Organization>}
   */
  updateOrganization (organization: Organization): Observable<Organization> {
    const updateOrganizationUrl = `${this.scholanceApiDomain}/organizations/${organization._id}`;
    return this.http.put<Organization>(updateOrganizationUrl, organization, this.httpOptions)
      .pipe(
        tap(updatedOrganization => {
          this.log('You successfully updated your organization', 'success');
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
    const addUserToOrganizationUrl = `${this.scholanceApiDomain}/organizations/${organization_id}/users/${user_id}`;
    return this.http.post<Organization>(addUserToOrganizationUrl, null, this.httpOptions)
      .pipe(
        tap(updatedOrganization => {
          this.log('You were successfully added to this organization', 'success');
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
    const addUserToOrganizationUrl = `${this.scholanceApiDomain}/organizations/${organization_id}/users/${user_id}`;
    return this.http.delete<Organization>(addUserToOrganizationUrl, this.httpOptions)
      .pipe(
        tap(updatedOrganization => { }),
        catchError(this.handleError<Organization>('updateOrganization'))
      );
  }

}
