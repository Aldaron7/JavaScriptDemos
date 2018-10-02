import { Injectable } from '@angular/core';
import { Model } from './repository.model';
import { RestDataSource } from './rest.datasource';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';

@Injectable()
export class ModelResolver {
  constructor(private model: Model, private dataSource: RestDataSource, private messageService: MessageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    if (this.model.getProducts().length == 0) {
      this.messageService.reportMessage(new Message('Loading data...'));
      return this.dataSource.getData();
    }
  }
}
