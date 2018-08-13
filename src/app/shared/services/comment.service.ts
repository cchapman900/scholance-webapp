import { Injectable } from '@angular/core';
import {SharedService} from './shared.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../models/comment.model';
import {UserService} from '../../user/services/user.service';
import {MessageService} from '../../messages/message.service';

@Injectable()
export class CommentService extends SharedService {

  private projectsServiceDomain = 'https://lichslfej2.execute-api.us-east-1.amazonaws.com/dev';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    protected messageService: MessageService
  ) {
    super(messageService);
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /**
   * CREATE Comment
   * @param {string} commentType
   * @param {any} objectIds
   * @param {string} text
   * @returns {Observable<Project>}
   */
  createComment (commentType: string, objectIds: {project_id?: string, entry_id?: string}, text: string): Observable<Comment> {
    let createCommentUrl = '';
    if (commentType === 'project') {
      createCommentUrl = `${this.projectsServiceDomain}/projects/${objectIds.project_id}/comments`;
    } else if (commentType === 'entry') {
      createCommentUrl = `${this.projectsServiceDomain}/projects/${objectIds.project_id}/entries/${objectIds.entry_id}/comments`;
    } else {
      this.handleError('invalid comment type');
      return;
    }
    return this.http.post<Comment>(createCommentUrl, {text: text}, this.httpOptions)
      .pipe(
        tap(createdComment => this.log(`fetched comment=${text}`)),
        catchError(this.handleError<Comment>('createComment'))
      );
  }

  /**
   * DELETE Comment
   * @param {string} commentType
   * @param {any} objectIds
   * @param {string} comment_id
   * @returns {Observable<Project>}
   */
  deleteComment (commentType: string, objectIds: {project_id?: string, entry_id?: string}, comment_id: string): Observable<Comment> {
    let deleteCommentUrl = '';
    if (commentType === 'project') {
      deleteCommentUrl = `${this.projectsServiceDomain}/projects/${objectIds.project_id}/comments/${comment_id}`;
    } else if (commentType === 'entry') {
      deleteCommentUrl = `${this.projectsServiceDomain}/projects/${objectIds.project_id}/entries/${objectIds.entry_id}/comments/${comment_id}`;
    } else {
      this.handleError('invalid comment type');
      return;
    }

    return this.http.delete<Comment>(deleteCommentUrl, this.httpOptions)
      .pipe(
        tap(createdComment => this.log(`fetched comment id=${comment_id}`)),
        catchError(this.handleError<Comment>('delete'))
      );
  }

}
