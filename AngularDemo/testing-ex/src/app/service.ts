import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  search(search) {
    const url: string = 'https://trailapi-trailapi.p.mashape.com?q[city_cont]=' + encodeURIComponent(search);
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Mashape-Key': mashapeKey
    });
    return this.http.get<any>(url, { headers: httpHeaders }).pipe(
      map(res => {
        // return the first place.
        if (res && res['places'] && res['places'].length && res['places'].length > 0) {
          return res['places'][0];
        } else {
          // otherwise return nothing
          return undefined;
        }
      }),
      catchError(err => {
        console.log('error', err);
        return undefined;
      })
    );
  }
}
