import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styles: []
})
export class CartdetailComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit() {}
}
