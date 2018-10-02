import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  _search = 'Atlanta';
  _searched = false;
  _result = '';

  constructor(private service: Service) {}

  incrementCounter() {
    this.counter++;
  }

  doSearch() {
    this.service.search(this._search).subscribe(
      res => {
        this._result = res;
      },
      err => {
        console.log(err);
      },
      () => {
        this._searched = true;
      }
    );
  }
}
