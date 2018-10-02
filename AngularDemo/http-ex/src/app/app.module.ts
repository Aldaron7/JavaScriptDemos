import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwaggerService } from './swagger.service';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [SwaggerService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
