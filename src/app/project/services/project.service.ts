import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';
import {User} from '../../user/models/user.model';
import {SharedService} from '../../shared/services/shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Entry} from '../models/entry.model';
import {Asset} from '../models/asset.model';
import {File} from '../models/file.model';
import { MessageService } from '../../messages/message.service';

@Injectable()
export class ProjectService extends SharedService {

  private projectsServiceDomain = 'https://lichslfej2.execute-api.us-east-1.amazonaws.com/dev';
  public user: User;

  constructor(
    private http: HttpClient,
    protected messageService: MessageService
  ) {
    super(messageService);
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /**
   * LIST Projects
   * @returns {Observable<Project[]>}
   */
  listProjects (filter: any = null): Observable<Project[]> {
    const getProjectUrl = `${this.projectsServiceDomain}/projects`;
    const options = filter ? { params: new HttpParams().set('status', filter.status)} : {};
    return this.http.get<Project[]>(getProjectUrl, options)
      .pipe(
        tap(project => { }),
        catchError(this.handleError<Project[]>('listProjects'))
      );
  }

  ////////////////////////////////////
  // PROJECT METHODS
  ////////////////////////////////////

  /**
   * GET Project
   *
   * @param {string} id
   * @param {boolean} cacheProject
   * @returns {Observable<Project>}
   */
  getProject (id: string, cacheProject = true): Observable<Project> {
    const cachedProject = localStorage.getItem('project');
    const parsedProject = JSON.parse(cachedProject);
    const getProjectUrl = `${this.projectsServiceDomain}/projects/${id}`;
    if (cachedProject && parsedProject._id === id && cacheProject) {
      console.log('Project loaded from cache');
      return Observable.of(parsedProject);
    } else {
      return this.http.get<Project>(getProjectUrl)
        .pipe(
          tap(project => {
            localStorage.setItem('project', JSON.stringify(project));
          }),
          catchError(this.handleError<Project>('getProject'))
        );
    }
  }

  /**
   * CREATE Project
   * @param {Project} project
   * @returns {Observable<Project>}
   */
  createProject (project: Project): Observable<Project> {
    const createProjectUrl = `${this.projectsServiceDomain}/projects`;
    return this.http.post<Project>(createProjectUrl, project, this.httpOptions)
      .pipe(
        tap(() => {
          this.log(`Project successfully created`)
        }),
        catchError(this.handleError<Project>('createProject'))
      );
  }

  /**
   * UPDATE Project
   * @param {Project} project
   * @returns {Observable<Project>}
   */
  updateProject (project: Project): Observable<Project> {
    const updateProjectUrl = `${this.projectsServiceDomain}/projects/${project._id}`;
    return this.http.put<Project>(updateProjectUrl, project, this.httpOptions)
      .pipe(
        tap(() => {
          this.log(`Project successfully updated`)
        }),
        catchError(this.handleError<Project>('updateProject'))
      );
  }

  /**
   * DELETE Project
   * @param {string} id
   * @returns {Observable<Project>}
   */
  deleteProject (id: string): Observable<Project> {
    const deleteProjectUrl = `${this.projectsServiceDomain}/projects/${id}`;
    return this.http.delete<Project>(deleteProjectUrl, this.httpOptions)
      .pipe(
        tap(deletedProject => {
          this.log('Project successfully deleted')
        }),
        catchError(this.handleError<Project>('deleteProject'))
      );
  }

  /**
   * UPDATE Project Status
   * @param {string} project_id
   * @param {string} status
   * @param {string} selectedEntry
   * @returns {Observable<Project>}
   */
  updateProjectStatus (project_id: string, status: string, selectedEntry?: string): Observable<Project> {
    const updateProjectStatusUrl = `${this.projectsServiceDomain}/projects/${project_id}/status`;
    return this.http.put<Project>(updateProjectStatusUrl, {status: status, selectedEntry: selectedEntry}, this.httpOptions)
      .pipe(
        tap(createdProject => {
          this.log('Successfully updated project status')
          localStorage.removeItem('project')
        }),
        catchError(this.handleError<Project>('updateProject'))
      );
  }


  ////////////////////////////////////
  // ENTRY METHODS
  // An Entry is both an individual Student signup as well as the eventual submission to the project
  ////////////////////////////////////

  /**
   * GET Entry
   * @param {string} project_id
   * @param {string} user_id
   * @returns {Observable<Project>}
   */
  getEntry (project_id: string, user_id: string): Observable<Entry> {
    const getEntryUrl = `${this.projectsServiceDomain}/projects/${project_id}/entries/${user_id}`;
    return this.http.get<Entry>(getEntryUrl, this.httpOptions)
      .pipe(
        tap(() => { }),
        catchError(this.handleError<Entry>('getEntry'))
      );
  }

  /**
   * CREATE Entry
   * @param {string} project_id
   * @returns {Observable<Project>}
   */
  createEntry (project_id: string): Observable<Project> {
    const createEntrytUrl = `${this.projectsServiceDomain}/projects/${project_id}/entries`;
    return this.http.post<Project>(createEntrytUrl, null, this.httpOptions)
      .pipe(
        tap(() => {
          this.log('You have successfully signed up for this project', 'success');
          localStorage.removeItem('project')

        }),
        catchError(this.handleError<Project>('createEntry'))
      );
  }

  /**
   * UPDATE Entry
   * @param {string} project_id
   * @param {object} entry
   * @returns {Observable<Project>}
   */
  updateEntry (project_id: string, entry): Observable<Project> {
    const updateEntryUrl = `${this.projectsServiceDomain}/projects/${project_id}/entries/${entry._id}`;
    return this.http.put<Project>(updateEntryUrl, entry, this.httpOptions)
      .pipe(
        tap(() => {
          this.log('You have successfully updated your project submission', 'success')
        }),
        catchError(this.handleError<Project>('createEntry'))
      );
  }

  /**
   * DELETE Entry
   * @param {string} project_id
   * @param {string} user_id
   * @returns {Observable<Project>}
   */
  deleteEntry (project_id: string, user_id: string): Observable<Project> {
    const deleteEntryUrl = `${this.projectsServiceDomain}/projects/${project_id}/entries/${user_id}`;
    return this.http.delete<Project>(deleteEntryUrl, this.httpOptions)
      .pipe(
        tap(deletedEntry => {
          this.log('You have successfully signed off of this project', 'success')
          localStorage.removeItem('project')
        }),
        catchError(this.handleError<Project>('deleteEntry'))
      );
  }


  ////////////////////////////////////
  // ASSET METHODS
  ////////////////////////////////////

  /**
   * CREATE Asset
   *
   * @param {string} assetType
   * @param {string} project_id
   * @param {Asset} asset
   * @param {string} user_id (optional)
   * @returns {Observable<Project>}
   */
  createAsset (assetType: string, project_id: string, asset: Asset, user_id?: string): Observable<Asset> {
    let createAssetUrl = '';
    if (assetType === 'supplementalResource') {
      createAssetUrl = `${this.projectsServiceDomain}/projects/${project_id}/supplemental-resources`;
    } else if (assetType === 'entryAsset') {
      createAssetUrl = `${this.projectsServiceDomain}/projects/${project_id}/entries/${user_id}/assets`;
    }
    return this.http.post<Asset>(createAssetUrl, asset, this.httpOptions)
      .pipe(
        tap(createdAsset => {
          this.log('Successfully created ' + assetType, 'success');
        }),
        catchError(this.handleError<Asset>('createProject'))
      );
  }

  /**
   * DELETE Asset
   *
   * @param {string} assetType
   * @param {string} project_id
   * @param {string} asset_id
   * @param {string} user_id (optional)
   * @returns {Observable<Asset>}
   */
  deleteAsset (assetType: string, project_id: string, asset_id: string, user_id?: string) {
    let uri = '';
    if (assetType === 'entryAsset') {
      uri = `${this.projectsServiceDomain}/projects/${project_id}/entries/${user_id}/assets/${asset_id}`;
    } else if (assetType === 'supplementalResource') {
      uri = `${this.projectsServiceDomain}/projects/${project_id}/supplemental-resources/${asset_id}`;
    }
    return this.http.delete(uri, this.httpOptions)
      .pipe(
        tap(() =>  {
          this.log('Asset deleted', 'success')
        }),
        catchError(this.handleError<Asset>('deleteAsset'))
      );
  }


  ///////////////////////////////
  // FILE ASSETS
  ///////////////////////////////

  /**
   * CREATE Supplemental Resource
   * @param {string} project_id
   * @param {File} file
   * @returns {Observable<Project>}
   */
  createSupplementalResourceFile (project_id: string, file: File): Observable<Asset> {
    const uploadSupplementalResourceFileURI = `projects/${project_id}/supplemental-resources/file`;
    return this.createFile(file, uploadSupplementalResourceFileURI);
  }

  /**
   * CREATE Entry Asset File
   * @param {string} project_id
   * @param {string} user_id
   * @param {File} file
   * @returns {Observable<Project>}
   */
  createEntryAssetFile (project_id: string, user_id: string, file: File): Observable<Asset> {
    console.log(file);
    const uploadSupplementalResourceFileURI = `projects/${project_id}/entries/${user_id}/assets/file`;
    return this.createFile(file, uploadSupplementalResourceFileURI);
  }

  /**
   * Helper method to upload file
   * @param {File} file
   * @param {string} location
   * @returns {Observable<Asset>}
   */
  private createFile (file: File, location: string): Observable<Asset> {
    const createFileUrl = `${this.projectsServiceDomain}/${location}`;
    console.log(file);
    return this.http.post<Asset>(createFileUrl, file, this.httpOptions)
      .pipe(
        tap((createdFile) =>  {
          this.log('Successfully created file asset')
        }),
        catchError(this.handleError<Asset>('createProject'))
      );
  }

}
