import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
