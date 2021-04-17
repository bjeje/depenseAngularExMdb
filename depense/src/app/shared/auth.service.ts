import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = '/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(AppComponent.url+`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        //console.table(res);
        localStorage.setItem('Token', res.body)
        //this.getUserProfile(res._id).subscribe((res) => {
          //this.currentUser = res;
          this.router.navigate([ '/home' ]);
          //this.router.navigate(['user-profile/' + res.msg._id]);
        //})
      })
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('Token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem('Token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id:number): Observable<any> {
    let api = `${this.endpoint}/user/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      // @ts-ignore
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
