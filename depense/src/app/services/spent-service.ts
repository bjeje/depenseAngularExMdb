import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { UserService } from './user.services';

@Injectable({
  providedIn: 'root'
})

export class SpentService {

  baseUrl = '/spent';

  constructor(private http: HttpClient, private User: UserService) { }

  async getSpent() {
    return this.http.get(AppComponent.url + this.baseUrl);
  }

  async getNineSpentFixed() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/nineFixed/"+ `${owner}`);
  }

  async getNineSpentVariable() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/nineVariable/" + `${owner}`);
  }

  async getSpentFixed() {
    let owner = this.User.getIdUserConnected();
    //return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/:dateBegin/:dateEnd'");
    return this.http.get(AppComponent.url + this.baseUrl + "/Fixed/" + `${owner}`);
  }

  async getSpentFixedByDate(dateBegin: string, dateEnd: string) {
    let owner = this.User.getIdUserConnected();
    //return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/:dateBegin/:dateEnd'");
    return this.http.get(AppComponent.url + this.baseUrl + "/FixedByDate/"+dateBegin+"/"+dateEnd+"/" + `${owner}`);
  }

  async getSpentVariableByDate(dateBegin: string, dateEnd: string) {
    let owner = this.User.getIdUserConnected();
    //return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/:dateBegin/:dateEnd'");
    return this.http.get(AppComponent.url + this.baseUrl + "/VariableByDate/"+dateBegin+"/"+dateEnd+"/"+ `${owner}`);
  }

  async getSpentByDateAndCategory(dateBegin: string, dateEnd: string) {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDateCat/"+dateBegin+"/"+dateEnd+"/"+ `${owner}`);
  }

  async getSpentById(id: number) {
    return this.http.get(AppComponent.url + this.baseUrl + `${id}`);
  }

  async createSpent(spent: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/', spent);
  }

  async updateSpent(id: number, spent: object) {
    return this.http.put(AppComponent.url + this.baseUrl + `${id}`, spent);
  }

  async deleteSpent(id: number) {
    return this.http.delete(AppComponent.url + this.baseUrl + `${id}`);
  }

}
