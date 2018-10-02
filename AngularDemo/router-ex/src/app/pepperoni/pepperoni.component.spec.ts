import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperoniComponent } from './pepperoni.component';

describe('PepperoniComponent', () => {
  let component: PepperoniComponent;
  let fixture: ComponentFixture<PepperoniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepperoniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
