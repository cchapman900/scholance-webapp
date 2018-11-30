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
      createCommentUrl = `${this.scholanceApiDomain}/projects/${objectIds.project_id}/comments`;
    } else if (commentType === 'entry') {
      createCommentUrl = `${this.scholanceApiDomain}/projects/${objectIds.project_id}/entries/${objectIds.entry_id}/comments`;
    } else {
      this.handleError('invalid comment type');
      return;
    }
    return this.http.post<Comment>(createCommentUrl, {text: text}, this.httpOptions)
      .pipe(
        tap(createdComment => {
          this.log('Successfully commented', 'success')
        }),
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
      deleteCommentUrl = `${this.scholanceApiDomain}/projects/${objectIds.project_id}/comments/${comment_id}`;
    } else if (commentType === 'entry') {
      deleteCommentUrl =
        `${this.scholanceApiDomain}/projects/${objectIds.project_id}/entries/${objectIds.entry_id}/comments/${comment_id}`;
    } else {
      this.handleError('invalid comment type');
      return;
    }

    return this.http.delete<Comment>(deleteCommentUrl, this.httpOptions)
      .pipe(
        tap(deletedComment => this.log('Successfully deleted comment', 'success')),
        catchError(this.handleError<Comment>('delete'))
      );
  }

}
