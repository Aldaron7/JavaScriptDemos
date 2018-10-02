import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {
  lastMessage: Message;

  constructor(messageService: MessageService, router: Router) {
    messageService.messages.subscribe(m => (this.lastMessage = m));
    router.events.pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)).subscribe(e => (this.lastMessage = null));
  }

  ngOnInit() {}
}
