import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, ChildComponent} from './app.component';
import { TestComponent } from './test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TestComponent,
    Test2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
