import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Model } from './repository.model';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource, REST_URL } from './rest.datasource';
import { ModelResolver } from './model.resolver';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [Model, RestDataSource, ModelResolver, { provide: REST_URL, useValue: `http://${location.hostname}:3000/products` }]
})
export class ModelModule {}
