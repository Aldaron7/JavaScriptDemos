import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';
@Directive({
  selector: '[appHoverer]'
  // tslint:disable-next-line:use-host-property-decorator
  // host: {
  //   '(mouseenter)': 'onMouseEnter()',
  //   '(mouseleave)': 'onMouseLeave()'
  // }
})
export class HovererDirective {
  @Input() appHoverer;
  @HostListener('mouseenter')
  onmouseenter() {
    this.changeColor(this.appHoverer);
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.changeColor('black');
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  changeColor(color: string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', color);
  }
  // onMouseEnter() {
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', this.hoverer);
  // }
  // onMouseLeave() {
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', 'black');
  // }
}
