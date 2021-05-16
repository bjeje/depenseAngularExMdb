import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { UserService } from './user.services';

@Injectable({
  providedIn: 'root'
})

export class IncomeService {


  baseUrl = '/income';

  constructor(private http: HttpClient, private User: UserService) { }

  async getIncome() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/" + `${owner}`);
  }

  async getNineIncome() {
    let owner = this.User.getIdUserConnected();
    //console.log(owner);
    return this.http.get(AppComponent.url + this.baseUrl + "/nine" + "/" + `${owner}`);
  }

  async getIncomeByDate(dateBegin: Date, dateEnd: Date) {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/"+dateBegin+"/"+dateEnd+"/"+ `${owner}`);
  }

  async getIncomeByDateAndCategory() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDateCat/:dateBegin/:dateEnd/" + `${owner}`);
  }

  async getIncomeById(id: number) {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + `${id}` + "/" + `${owner}`);
  }

  async createIncome(income: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/', income);
  }

  async updateIncome(id: number, income: object) {
    return this.http.put(AppComponent.url + this.baseUrl + `${id}`, income);
  }

  async deleteIncome(id: number) {
    return this.http.delete(AppComponent.url + this.baseUrl + `${id}`);
  }

}
