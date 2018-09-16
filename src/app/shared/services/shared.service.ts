import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {MessageService} from '../../messages/message.service';


@Injectable()
export class SharedService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    })
  };

  constructor(
    protected messageService: MessageService
  ) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  protected log(message: string, alertClass = null) {
    this.messageService.add(message, alertClass);
  }

  refreshHttpOptions() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    console.log(this.httpOptions);
  }

}
