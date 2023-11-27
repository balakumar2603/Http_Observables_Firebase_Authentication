import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookForm: FormGroup;
  myBooks: Array<{ bookid: number; bookname: string; bookauthor: string }> = [];
  //myBooks:[];
  constructor(private _book: BookService) {}
  ngOnInit() {
    this.bookForm = new FormGroup({
      bookid: new FormControl(null, Validators.required),
      bookname: new FormControl(null, Validators.required),
      bookauthor: new FormControl(null, Validators.required),
    });
  }
  onPushBook() {
    const bookid = this.bookForm.get('bookid')?.value;
    const bookname = this.bookForm.get('bookname')?.value;
    const bookauthor = this.bookForm.get('bookauthor')?.value;
    this.myBooks.push({
      bookid: bookid,
      bookname: bookname,
      bookauthor: bookauthor,
    });
  }
  onSave() {
    this._book.saveBook(this.myBooks).subscribe(
      (sub) => {
        console.log(sub);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGet() {
    this._book.getBook().subscribe(
      (sub) => {
        console.log(sub);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
