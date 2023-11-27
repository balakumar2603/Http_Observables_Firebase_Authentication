import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Http_Observable_Firebase_Authentication'
  constructor(public _auth: AuthService) {}
  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDNyBvCgNirteFjNx5oyO7VcsYJoF9oS98',
    };
    firebase.initializeApp(firebaseConfig);
  }
  onLogout() {
    this._auth.logout();
  }
}
