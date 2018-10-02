import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = 3101;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  // private sendRequest(verb: RequestMethod, url: string, body?: Product | Order): Observable<Product | Order> {
  //   return this.http
  //     .request(
  //       new Request({
  //         method: verb,
  //         url: this.baseUrl + url,
  //         body: body
  //       })
  //     )
  //     .map(response => response.json());
  // }
}
