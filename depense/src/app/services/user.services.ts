import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = '/user';

  constructor(private http: HttpClient) { }

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

  async signin(user: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/signin', user);
  }

  async updateUser(id: number, user: object) {
    return this.http.put(AppComponent.url + this.baseUrl + `${id}`, user);
  }

  async deleteUser(id: number) {
    return this.http.delete(AppComponent.url + this.baseUrl + `${id}`);
  }

}
