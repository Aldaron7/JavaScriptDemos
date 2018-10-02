import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SizerDirective } from './sizer.directive';
import { HovererDirective } from './hoverer.directive';

@NgModule({
  declarations: [AppComponent, SizerDirective, HovererDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
