import { Component, OnInit, Inject } from '@angular/core';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARED_STATE } from './sharedState.model';
import { Product } from '../model/product';
import { Observer } from 'rxjs';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  category: string;

  constructor(
    private model: Model,
    /*@Inject(SHARED_STATE) private observer: Observer<SharedState>,*/
    private messageService: MessageService,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => (this.category = params['category'] || null));
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts().filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.model
      .getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }
  // editProduct(key: number) {
  //   this.observer.next(new SharedState(MODES.EDIT, key));
  // }
  // createProduct() {
  //   this.observer.next(new SharedState(MODES.CREATE));
  // }

  sendError() {
    this.messageService.reportMessage(new Message('Error produced!', true));
  }

  ngOnInit() {}
}
