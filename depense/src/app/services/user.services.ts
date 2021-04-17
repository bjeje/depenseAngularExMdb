import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = '/user';

  constructor(private http: HttpClient, private AuthService: AuthService) { }

  async getTests() {
    return this.http.get(AppComponent.url + this.baseUrl);
  }

  async getUser() {
    return this.http.get(AppComponent.url + this.baseUrl);
  }

  async getUserById(id: number) {
    return this.http.get(AppComponent.url + this.baseUrl + `${id}`);
  }

  async signup(user: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/signup', user);
  }

  async signIn(user: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/signin', user);
  }

  async updateUser(id: number, user: object) {
    return this.http.put(AppComponent.url + this.baseUrl + `${id}`, user);
  }

  async deleteUser(id: number) {
    return this.http.delete(AppComponent.url + this.baseUrl + `${id}`);
  }

  getFirstname():string {
    return this.parseJwt(this.AuthService.getToken()).firstname;
  }

  getLogin (){
    return this.parseJwt(this.AuthService.getToken()).login;
  }

  parseJwt (token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };
  /*parseJwt = function(token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }*/

}
