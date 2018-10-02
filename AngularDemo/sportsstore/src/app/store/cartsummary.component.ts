import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styles: []
})
export class CartsummaryComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit() {}
}
