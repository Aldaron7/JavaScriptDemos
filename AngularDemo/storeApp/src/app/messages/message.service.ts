import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    this.subject.next(msg);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }
}
