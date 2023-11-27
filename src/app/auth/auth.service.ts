import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentToken: any;
  constructor(private route:Router) {}
  RegisterUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  LoginUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        this.getToken();
        this.route.navigate(['/book']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getToken() {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((token: string) => {
        this.currentToken = token;
      });
    return this.currentToken;
  }
  isAuthenticated() {
    return this.currentToken != null || this.currentToken != undefined ? true : false;
  }
  logout(){
    firebase.auth().signOut();
    this.currentToken= undefined;
    this.route.navigate(['login']);
  }
}
