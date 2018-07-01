import { Injectable } from '@angular/core';
import {SharedService} from './shared.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../models/comment.model';
import {UserService} from '../../user/services/user.service';

@Injectable()
export class CommentService extends SharedService {

  private projectsServiceDomain = 'https://lichslfej2.execute-api.us-east-1.amazonaws.com/dev';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    super();
  }


  /**************************************
   * HTTP METHODS
   **************************************/

  /**
   * CREATE Comment
   * @param {string} parentUrl
   * @param {string} text
   * @returns {Observable<Project>}
   */
  createComment (parentUrl: string, text: string): Observable<Comment> {
    const createCommentUrl = `${this.projectsServiceDomain}/${parentUrl}/comments`;
    return this.http.post<Comment>(createCommentUrl, {text: text}, this.httpOptions)
      .pipe(
        tap(createdComment => this.log(`fetched comment=${text}`)),
        catchError(this.handleError<Comment>('createComment'))
      );
  }

  /**
   * DELETE Comment
   * @param {string} parentUrl
   * @param {Comment} commentId
   * @returns {Observable<Project>}
   */
  deleteComment (parentUrl: string, commentId: string): Observable<Comment> {
    const deleteCommentUrl = `${this.projectsServiceDomain}${parentUrl}/comments/${commentId}`;
    return this.http.delete<Comment>(deleteCommentUrl, this.httpOptions)
      .pipe(
        tap(createdComment => this.log(`fetched comment id=${commentId}`)),
        catchError(this.handleError<Comment>('createComment'))
      );
  }

}
