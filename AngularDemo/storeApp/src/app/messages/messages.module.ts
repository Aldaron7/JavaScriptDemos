import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessagesModule {}
