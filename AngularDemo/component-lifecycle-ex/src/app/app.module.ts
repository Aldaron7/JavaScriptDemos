import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent, NameComponent, NumbersComponent, MemberComponent, CrewComponent, CardComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NumbersComponent,
    MemberComponent,
    CrewComponent,
    CardComponent
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
