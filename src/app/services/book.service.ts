import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private _http: HttpClient, private _auth: AuthService) {}
  saveBook(books: any[]): Observable<any> {
    const tk = this._auth.getToken();
    return this._http.post(
      'https://httpexample-fa965-default-rtdb.firebaseio.com/data.json?auth=' +
        tk,
      books
    );
  }
  getBook(): Observable<any> {
    const tk = this._auth.getToken();
    return this._http.get(
      'https://httpexample-fa965-default-rtdb.firebaseio.com/data.json?auth=' +
        tk
    );
  }
}
