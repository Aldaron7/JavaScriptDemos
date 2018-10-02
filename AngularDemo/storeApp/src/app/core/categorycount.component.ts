import { Component, OnInit, DoCheck, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { Model } from '../model/repository.model';

@Component({
  selector: 'app-categorycount',
  template: `<div class="bg-primary p-1">There are {{count}} categories</div>`,
  styles: []
})
export class CategorycountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer;
  count: number = 0;
  constructor(private model: Model, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef) {}
  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create(this.changeDetector);
  }
  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.count = this.model
        .getProducts()
        .map(p => p.category)
        .filter((category, index, array) => array.indexOf(category) == index).length;
    }
  }
}
