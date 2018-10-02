import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() name;
  supercharged = '';

  constructor(private service: CarService) {}

  ngOnInit() {
    this.supercharged = this.service.isSuperCharged(this.name);
  }
}
