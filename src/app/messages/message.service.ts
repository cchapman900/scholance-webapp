import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators'

@Injectable()
export class MessageService {
  messages: string[] = [];
  alertClass: string;

  add(message: string, alertClass = 'info') {
    setTimeout(() => this.clear(), 10000);
    this.messages.push(message);
    console.log(alertClass);
    this.alertClass = alertClass;
  }

  clear() {
    this.messages = [];
    this.alertClass = 'info'
  }

}
