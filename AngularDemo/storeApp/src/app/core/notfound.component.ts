import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `<h3 class="bg-danger p-1">Sorry, something went wrong</h3>
  <button class="btn btn-primary" routerLink="/">Start Over</button>`,
  styles: []
})
export class NotfoundComponent {}
