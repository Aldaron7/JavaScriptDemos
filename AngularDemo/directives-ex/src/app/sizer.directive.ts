import { Directive, Input, Component, ElementRef, Renderer, OnInit } from '@angular/core';
@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {
  @Input() appSizer: string;

  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'font-size', this.appSizer);
  }
}
