import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../services/income-service";
import {SpentService} from "../../services/spent-service";

@Component({
  selector: 'app-total-box',
  templateUrl: './total-box.component.html',
  styleUrls: ['./total-box.component.css']
})
export class TotalBoxComponent implements OnInit {
  listIncome: any;
  listSpentVariable: any;
  listSpentFixed: any;
  totalIncome: any;
  totalSpentfixed: any;
  totalSpentVariable: any;


  constructor(private incomeService: IncomeService, private spentService: SpentService) {}

  ngOnInit(): void {
    this.getIncomeByDate();
    this.getSpentFixedByDate();
    this.getSpentVariableByDate();
  }

  async getIncomeByDate() {
    (await this.incomeService.getIncomeByDate("2021-04-01", "2021-04-30")).subscribe(data => {
      if (data) {
        this.listIncome = data;
        this.listIncome = this.listIncome.body;
      }
    });
  }

  async getSpentFixedByDate() {
    (await this.spentService.getSpentFixedByDate("2021-04-01", "2021-04-30")).subscribe(data => {
      if (data) {
        this.listSpentFixed = data;
        this.listSpentFixed = this.listSpentFixed.body;
      }
    });
  }

  async getSpentVariableByDate() {
    (await this.spentService.getSpentVariableByDate("2021-04-01", "2021-04-30" )).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        this.listSpentVariable = this.listSpentVariable.body;
        /*let last = this.listSpentVariable.length;
        this.totalSpentVariable = this.listSpentVariable[last-1];*/
      }
    });
  }
}
