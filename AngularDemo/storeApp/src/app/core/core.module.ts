import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';
import { SharedState, SHARED_STATE, MODES } from './sharedState.model';
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';
import { MessagesModule } from '../messages/messages.module';
import { MessageService } from '../messages/message.service';
import { Model } from '../model/repository.model';
import { Message } from '../messages/message.model';
import { RouterModule } from '@angular/router';
import { CategorycountComponent } from './categorycount.component';
import { ProductcountComponent } from './productcount.component';
import { NotfoundComponent } from './notfound.component';
import { UnsavedGuard } from './unsaved.guard';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ModelModule, MessagesModule, RouterModule],
  declarations: [TableComponent, FormComponent, StatePipe, CategorycountComponent, ProductcountComponent, NotfoundComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [UnsavedGuard]
  // providers: [
  //   {
  //     provide: SHARED_STATE,
  //     deps: [MessageService, Model],
  //     useFactory: (messageService, model) => {
  //       const subject = new Subject<SharedState>();
  //       // subject.subscribe(m =>
  //       //   messageService.reportMessage(new Message(MODES[m.mode] + (m.id != undefined ? ` ${model.getProduct(m.id).name}` : '')))
  //       // );
  //       return subject;
  //     }
  //   }
  // ]
})
export class CoreModule {}
