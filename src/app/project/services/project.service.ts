import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';
import {User} from '../../user/models/user.model';
import {SharedService} from '../../shared/services/shared.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProjectService extends SharedService {

  private projectsServiceAPIUrl = 'https://lichslfej2.execute-api.us-east-1.amazonaws.com/dev';
  public authenticatedUser$: Observable<User>;

  constructor(
    private http: HttpClient
  ) {
    super();
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /**
   * LIST Projects
   * @returns {Observable<Project[]>}
   */
  listProjects (): Observable<Project[]> {
    const getProjectUrl = `${this.projectsServiceAPIUrl}/projects`;
    return this.http.get<Project[]>(getProjectUrl)
      .pipe(
        tap(project => this.log(`fetched projects`)),
        catchError(this.handleError<Project[]>('listProjects'))
      );
  }

  /**
   * GET Project
   * @param {string} id
   * @returns {Observable<Project>}
   */
  getProject (id: string): Observable<Project> {
    const getProjectUrl = `${this.projectsServiceAPIUrl}/projects/${id}`;
    return this.http.get<Project>(getProjectUrl)
      .pipe(
        tap(project => this.log(`fetched project id=${id}`)),
        catchError(this.handleError<Project>('getProject'))
      );
  }

  /**
   * CREATE Project
   * @param {Project} project
   * @returns {Observable<Project>}
   */
  createProject (project: Project): Observable<Project> {
    const getProjectUrl = `${this.projectsServiceAPIUrl}/projects`;
    return this.http.post<Project>(getProjectUrl, project, this.httpOptions)
      .pipe(
        tap(createdProject => this.log(`fetched project id=${createdProject._id}`)),
        catchError(this.handleError<Project>('createProject'))
      );
  }

}
