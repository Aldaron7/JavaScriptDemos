import { Component, OnInit, ViewChild } from '@angular/core';
import { Language } from './language';
import { SwaggerService } from './swagger.service';
import { BookService } from './book.service';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  _languages = new Array<Language>();
  _posts = [];
  _post = {};
  @ViewChild('modal') _myModal: any;
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();
  _error;
  _result: any;

  constructor(private _swaggerService: SwaggerService, private bookService: BookService) {}

  ngOnInit() {
    this._swaggerService.getLanguages().subscribe(
      res => {
        this._languages = res;
      },
      error => {
        console.log('an error occurred', error);
      }
    );
    this._result = this._swaggerService.getPosts().pipe(
      map(res => {
        let titles = '';
        for (const responseItem of res) {
          titles += responseItem['title'];
        }
        return titles;
      })
    );
    this._swaggerService
      .getPosts()
      .pipe(
        map(res => {
          const postsArray: Array<Post> = new Array<Post>();
          for (const responseItem of res) {
            const post = new Post(responseItem['title'], responseItem['body'], responseItem['id']);
            postsArray.push(post);
          }
          return postsArray;
        })
      )
      .subscribe(res => (this._posts = res), error => (this._error = error));
  }

  showPost(postId: number) {
    this._swaggerService.getPost(postId).subscribe(res => {
      this._post = res;
      this._myModal.nativeElement.style.display = 'block';
    });
  }

  closeModal() {
    this._myModal.nativeElement.style.display = 'none';
  }

  onAdd() {
    this.bookService.addBook(this._title, this._body).subscribe(res => {
      this._added.push(res);
    });
  }
}
