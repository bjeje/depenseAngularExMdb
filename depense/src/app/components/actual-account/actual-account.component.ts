import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../services/income-service";
import {SpentService} from "../../services/spent-service";

@Component({
  selector: 'app-actual-account',
  templateUrl: './actual-account.component.html',
  styleUrls: ['./actual-account.component.css']
})
export class ActualAccountComponent implements OnInit {

  listIncome: any;
  listSpentVariable: any;
  listSpentFixed: any;
  totalStay: any;

  constructor(private incomeService: IncomeService, private spentService: SpentService) {}

  ngOnInit(): void {
    this.totalStay = [{total: null}];
    this.getIncomeByDate();
    this.getSpentFixedByDate();
    this.getSpentVariableByDate();
  }

  async getIncomeByDate():Promise<void> {
    (await this.incomeService.getIncomeByDate("2021-04-01", "2021-04-30")).subscribe(data => {
      if (data) {
        this.listIncome = data;
        this.listIncome = this.listIncome.body;
        let nbrLastIncome = this.listIncome.length;
        this.listIncome = this.listIncome[nbrLastIncome-1];
        this.totalStay[0].total += this.listIncome.totalIncome;
      }
    });
  }

  async getSpentFixedByDate():Promise<void> {
    (await this.spentService.getSpentFixedByDate("2021-04-01", "2021-04-30")).subscribe(data => {
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
    (await this.spentService.getSpentVariableByDate("2021-04-01", "2021-04-30" )).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        this.listSpentVariable = this.listSpentVariable.body;
        let nbrLastVariable = this.listSpentVariable.length;
        this.listSpentVariable = this.listSpentVariable[nbrLastVariable-1];
        this.totalStay[0].total -= this.listSpentVariable.totalSpentVariable;
      }
    });
  }

}
