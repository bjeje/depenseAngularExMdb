import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class SpentService {

  baseUrl = '/spent';

  constructor(private http: HttpClient) { }

  async getSpent() {
    return this.http.get(AppComponent.url + this.baseUrl);
  }

  async getNineSpentFixed() {
    return this.http.get(AppComponent.url + this.baseUrl + "/nineFixed");
  }

  async getNineSpentVariable() {
    return this.http.get(AppComponent.url + this.baseUrl + "/nineVariable");
  }

  async getSpentFixedByDate(dateBegin: string, dateEnd: string) {
    //return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/:dateBegin/:dateEnd'");
    return this.http.get(AppComponent.url + this.baseUrl + "/FixedByDate/"+dateBegin+"/"+dateEnd+"'");
  }

  async getSpentVariableByDate(dateBegin: string, dateEnd: string) {
    //return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/:dateBegin/:dateEnd'");
    return this.http.get(AppComponent.url + this.baseUrl + "/VariableByDate/"+dateBegin+"/"+dateEnd+"'");
  }

  async getSpentByDateAndCategory() {
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDateCat/:dateBegin/:dateEnd'");
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
