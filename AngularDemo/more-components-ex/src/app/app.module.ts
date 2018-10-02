import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, Paragraph } from './app.component';
import { CarComponent } from './car/car.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomerComponent,
    CustomerListComponent,
    Paragraph
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
