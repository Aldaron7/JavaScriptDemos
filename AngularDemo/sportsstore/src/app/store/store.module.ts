import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { CartsummaryComponent } from './cartsummary.component';
import { CartdetailComponent } from './cartdetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ModelModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartsummaryComponent, CartdetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartdetailComponent, CheckoutComponent]
})
export class StoreModule {}
