import { Component } from '@angular/core';
import { merge, fromEvent, Observable } from 'rxjs';
import { filter, bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';

  _logs: Array<string> = [];
  constructor() {
    const observable: Observable<any> = merge(
      fromEvent(document, 'keydown'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'scroll'),
      fromEvent(document, 'touchstart')
    );
    const idleEventObservable = observable.pipe(
      bufferTime(5000),
      filter(function(arr) {
        return arr.length == 0;
      })
    );
    idleEventObservable.subscribe(idleEvent => this._logs.push('idle'));
  }
}
