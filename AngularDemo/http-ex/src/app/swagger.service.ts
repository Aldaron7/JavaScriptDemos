import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from './language';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {
  constructor(private _http: HttpClient) {}

  getLanguages() {
    return this._http.get<Array<Language>>('https://languagetool.org/api/v2/languages');
  }
  getPosts() {
    return this._http.get<Array<Post>>('http://jsonplaceholder.typicode.com/posts');
  }
  getPost(postId: number) {
    return this._http.get<Post>(`http://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
