import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('theCar') car: ICar;
  @Output() carDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(car: ICar) {
    this.carDelete.emit(car);
  }

}
