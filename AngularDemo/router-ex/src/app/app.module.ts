import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepperoniComponent } from './pepperoni/pepperoni.component';
import { EverythingComponent } from './everything/everything.component';
import { OtherComponent } from './other/other.component';
import { PastaComponent } from './other/pasta.component';
import { CalzoneComponent } from './other/calzone.component';
import { PleaseSelectComponent } from './customer/please-select.component';
import { DetailComponent } from './customer/detail.component';
import { CustomerService } from './customer/customer.service';
import { Component1Component } from './component/component1.component';
import { Component2Component } from './component/component2.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { NonAuthenticatedComponent } from './authenticated/non-authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    PepperoniComponent,
    EverythingComponent,
    OtherComponent,
    PastaComponent,
    CalzoneComponent,
    PleaseSelectComponent,
    DetailComponent,
    Component1Component,
    Component2Component,
    AuthenticatedComponent,
    NonAuthenticatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
