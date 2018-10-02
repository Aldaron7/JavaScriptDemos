import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzoneComponent } from './calzone.component';

describe('CalzoneComponent', () => {
  let component: CalzoneComponent;
  let fixture: ComponentFixture<CalzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
