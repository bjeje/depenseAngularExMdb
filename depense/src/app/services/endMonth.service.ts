import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { UserService } from './user.services';

@Injectable({
  providedIn: 'root'
})

export class EndMonthService {

  baseUrl = '/endMonth';

  constructor(private http: HttpClient, private User: UserService) { }

  async getEndMonth() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/" + `${owner}`);
  }

  async getLastEndMonth() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/last/" + `${owner}`);
  }

  async getEndMonthByDate(dateBegin: Date, dateEnd: Date) {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/allByDate/"+dateBegin+"/"+dateEnd+"/"+ `${owner}`);
  }

  async getTwelveEndMonth() {
    let owner = this.User.getIdUserConnected();
    return this.http.get(AppComponent.url + this.baseUrl + "/twelve/"+ `${owner}`);
  }

  async createEndMonth(endMonth: object) {
    return this.http.post(AppComponent.url + this.baseUrl + '/', endMonth);
  }

}
