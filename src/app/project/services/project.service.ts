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
    const createProjectUrl = `${this.projectsServiceAPIUrl}/projects`;
    return this.http.post<Project>(createProjectUrl, project, this.httpOptions)
      .pipe(
        tap(createdProject => this.log(`fetched project id=${createdProject._id}`)),
        catchError(this.handleError<Project>('createProject'))
      );
  }

  /**
   * UPDATE Project
   * @param {Project} project
   * @returns {Observable<Project>}
   */
  updateProject (project: Project): Observable<Project> {
    const updateProjectUrl = `${this.projectsServiceAPIUrl}/projects/${project._id}`;
    return this.http.put<Project>(updateProjectUrl, project, this.httpOptions)
      .pipe(
        tap(createdProject => this.log(`fetched project id=${createdProject._id}`)),
        catchError(this.handleError<Project>('updateProject'))
      );
  }

  /**
   * DELETE Project
   * @param {string} id
   * @returns {Observable<Project>}
   */
  deleteProject (id: string): Observable<Project> {
    const deleteProjectUrl = `${this.projectsServiceAPIUrl}/projects/${id}`;
    return this.http.delete<Project>(deleteProjectUrl, this.httpOptions)
      .pipe(
        tap(deletedProject => this.log(`fetched project id=${deletedProject._id}`)),
        catchError(this.handleError<Project>('deleteProject'))
      );
  }

}
