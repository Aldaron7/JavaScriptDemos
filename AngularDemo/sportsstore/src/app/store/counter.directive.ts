import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[counterOf]'
})
export class CounterDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('counterOf') counter: number;

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
