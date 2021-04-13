import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class IncomeService {

  baseUrl = '/income';

  constructor(private http: HttpClient) { }

  async getIncome() {
    return this.http.get(AppComponent.url + this.baseUrl);
  }

  async getNineIncome() {
    return this.http.get(AppComponent.url + this.baseUrl + "/nine");
  }

  async getIncomeByDate(dateBegin: string, dateEnd: string) {
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/"+dateBegin+"/"+dateEnd+"'");
  }

  async getIncomeByDateAndCategory() {
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDateCat/:dateBegin/:dateEnd'");
  }

  async getIncomeById(id: number) {
    return this.http.get(AppComponent.url + this.baseUrl + `${id}`);
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
