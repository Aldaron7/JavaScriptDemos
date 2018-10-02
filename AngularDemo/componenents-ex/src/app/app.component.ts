import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Car } from './car';
@Component({
  selector: 'app-root',
  template: `
<ul>
<li *ngFor="let car of _cars">
<span [attr.id]="car.id" [attr.data-desc]="car.make + '
' + car.model" [attr.data-article]="car.article">
{{car.year}}&nbsp;{{car.
make}}&nbsp;{{car.model}}&nbsp;<button
(click)="showCar($event)">View</button></span>
</li>
</ul>

<p>
Foreground: <input [(ngModel)]="fg" />
</p>
<p>
Background: <input [(ngModel)]="bg" />
</p>
<div [ngStyle]="{'color': fg, 'background-color': bg,
'padding': '5px'}">
Test
</div>

<input #input type="text" (input)="textInput($event)"
value=""/>
<hr>
Upper-Case: {{upperCase}}
<br/>
Lower-Case: {{lowerCase}}
`,
  styles: []
})
export class AppComponent {
  upperCase = '';
  lowerCase = '';
  @ViewChild('input') inputBox;

  fg = '#ffffff';
  bg = '#000000';

  _cars = [
    new Car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/Honda_NSX'),
    new Car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  textInput(event) {
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }
  // ngAfterViewInit() {
  //   this.inputBox.nativeElement.focus();
  // }

  showCar(event) {
    const desc = event.target.parentElement.dataset.desc;
    if (window.confirm('If you click "ok" you would be redirected to an article about the ' + desc + '. Cancel will load this website ')) {
      window.location.href = event.target.parentElement.dataset.article;
    }
  }
}
