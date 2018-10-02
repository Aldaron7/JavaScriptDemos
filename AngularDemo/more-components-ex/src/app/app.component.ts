import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, ContentChild } from '@angular/core';
import { ICar } from './car/icar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('title') title: ElementRef;
  @ViewChildren('paragraph1, paragraph2') paragraphs;
  note: string;
  cars: Array<ICar> = [{ make: 'bmw', model: 'm3' }, { make: 'porsche', model: '911' }, { make: 'ford', model: 'mustang' }];

  deleteCar(car: ICar) {
    alert('Deleting car: ' + JSON.stringify(car));
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'app works differently!';
    setTimeout(() => (this.note = 'number of paragraphs: ' + this.paragraphs.length));
  }
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'Paragraph',
  template: `<div><b>{{ptitle.nativeElement.innerHTML}}</b><p><ng-content></ng-content></p></div>`,
  styles: ['p {border: 1px solid #c0c0c0; padding: 10px;}']
})
// tslint:disable-next-line:component-class-suffix
export class Paragraph {
  @ContentChild('ptitle') ptitle;
}
