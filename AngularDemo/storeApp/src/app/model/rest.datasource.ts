import { InjectionToken, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { catchError, delay } from 'rxjs/operators';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {
  private headers = new HttpHeaders({ 'Access-Key': '<secret>', 'Application-Names': ['stareApp', 'proAngular'] });

  constructor(private http: HttpClient, @Inject(REST_URL) private url: string) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {headers: this.headers}).pipe(delay(2000));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post(this.url, product, {headers: this.headers}).pipe(delay(2000));
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(`${this.url}/${product.id}`, product, {headers: this.headers}).pipe(delay(2000));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers}).pipe(delay(2000));
  }

  // .pipe(catchError(error => Observable.throw(`Network Error: ${error.statusText} (${error.status})`)));
}
