import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICustomer } from './icustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: ICustomer;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClicked() {
    this.clicked.emit(this.customer.name);
  }
}
