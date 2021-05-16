import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../services/income-service";
import {SpentService} from "../../services/spent-service";
import {EndMonthService} from "../../services/endMonth.service";

@Component({
  selector: 'app-actual-account',
  templateUrl: './actual-account.component.html',
  styleUrls: ['./actual-account.component.css']
})
export class ActualAccountComponent implements OnInit {

  listIncome: any;
  listSpentVariable: any;
  listSpentFixed: any;
  endMonthStay: any;
  totalStay: any;

  date = new Date();
  dateOldFirstDay = this.setLastMonthFirstDay();
  dateOldLastDay = this.setLastMonthLastDay();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

  constructor(private incomeService: IncomeService, private spentService: SpentService, private endMonthService: EndMonthService) {}

  ngOnInit(): void {
    this.totalStay = [{total: null}];
    this.getIncomeByDate();
    //this.getSpentFixedByDate();
    this.getSpentFixed();
    this.getSpentVariableByDate();
    this.getEndMonthByDate();
  }

  async getIncomeByDate():Promise<void> {
    (await this.incomeService.getIncomeByDate(this.firstDay, this.lastDay)).subscribe(data => {
      if (data) {
        this.listIncome = data;
        this.listIncome = this.listIncome.body;
        let nbrLastIncome = this.listIncome.length;
        this.listIncome = this.listIncome[nbrLastIncome-1];
        this.totalStay[0].total += this.listIncome.totalIncome;
      }
    });
  }

  /*async getSpentFixedByDate():Promise<void> {
    (await this.spentService.getSpentFixedByDate("2021-04-01", "2021-04-30")).subscribe(data => {
      if (data) {
        this.listSpentFixed = data;
        this.listSpentFixed = this.listSpentFixed.body;
        let nbrLastFixed = this.listSpentFixed.length;
        this.listSpentFixed = this.listSpentFixed[nbrLastFixed-1];
        this.totalStay[0].total -= this.listSpentFixed.totalSpentFixed;
      }
    });
  }*/

  async getSpentFixed():Promise<void> {
    (await this.spentService.getSpentFixed()).subscribe(data => {
      if (data) {
        this.listSpentFixed = data;
        this.listSpentFixed = this.listSpentFixed.body;
        let nbrLastFixed = this.listSpentFixed.length;
        this.listSpentFixed = this.listSpentFixed[nbrLastFixed-1];
        this.totalStay[0].total -= this.listSpentFixed.totalSpentFixed;
      }
    });
  }

  async getSpentVariableByDate():Promise<void> {
    (await this.spentService.getSpentVariableByDate(this.firstDay, this.lastDay )).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        this.listSpentVariable = this.listSpentVariable.body;
        let nbrLastVariable = this.listSpentVariable.length;
        this.listSpentVariable = this.listSpentVariable[nbrLastVariable-1];
        this.totalStay[0].total -= this.listSpentVariable.totalSpentVariable;
      }
    });
  }

  async getEndMonthByDate():Promise<void> {
    (await this.endMonthService.getEndMonthByDate(this.dateOldFirstDay, this.dateOldLastDay)).subscribe(data => {
      if (data) {
        this.endMonthStay = data;
        this.endMonthStay = this.endMonthStay.body;
        if(this.endMonthStay[0].value) {
          this.totalStay[0].total += this.endMonthStay[0].value;
        }
      }
    })
  }

  setLastMonthFirstDay() {
    let date = new Date();
    date.setDate(1);
    date.setMonth(this.date.getMonth()-1);
    return date;
  }

  setLastMonthLastDay() {
    let date = new Date();
    date.setDate(1);
    date = new Date(date.getFullYear(), date.getMonth(),0)
    return date;
  }

}
