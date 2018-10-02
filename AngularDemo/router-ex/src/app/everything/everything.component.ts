import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {
  private size: String = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params: Object) => (this.size = params['size']));
  }

  ngOnInit() {}
}
