import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SharedComponent } from '../shared/shared.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SupportComponent, SharedComponent]
})
export class SupportModule {}
