import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSelectComponent } from './please-select.component';

describe('PleaseSelectComponent', () => {
  let component: PleaseSelectComponent;
  let fixture: ComponentFixture<PleaseSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleaseSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
