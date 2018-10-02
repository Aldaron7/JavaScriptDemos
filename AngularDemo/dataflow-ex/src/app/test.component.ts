import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>Welcome to {{title}}</h1>`,
  styles: [`h1 {text-align: center;}`]
})
export class TestComponent {
  title = 'My App';
}
