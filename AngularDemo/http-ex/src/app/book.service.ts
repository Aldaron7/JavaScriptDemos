import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _http: HttpClient) {}

  addBook(title: string, body: string) {
    const requestBody = { title: title || ['Unspecified'], body: body || ['Unspecified'] };
    return this._http.post('http://jsonplaceholder.typicode.com/posts', requestBody);
  }
}
