import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child [appTitle]="'My App'" (clickTitle)="onTitleClicked($event)"></app-child>`

})
export class AppComponent {
  onTitleClicked(title: string) {
    alert('Title clicked: ' + title);
  }
}

@Component({
  selector: 'app-child',
  template: `<h1 (click)="onClicked()"> Welcome to {{appTitle}} </h1>`,
  styles: [`h1 {
    text-align: center;
  }`]
})
export class ChildComponent {
  @Input()
  appTitle: string;
  @Output()
  clickTitle = new EventEmitter<string>();

  onClicked() {
    this.clickTitle.emit(this.appTitle);
  }
}
