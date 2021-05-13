import {Component, NgModule, OnInit} from '@angular/core';
import {IncomeService} from "../../services/income-service";
import {SpentService} from "../../services/spent-service";
import * as dayjs from 'dayjs'
import 'dayjs/locale/fr';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

dayjs.locale('fr');

@Component({
  selector: 'app-tab-nine',
  templateUrl: './tab-nine.component.html',
  styleUrls: ['./tab-nine.component.css']
})

export class TabNineComponent implements OnInit {

  listIncome: any;
  listSpentFixed: any;
  listSpentVariable: any;
  isSmallSize: boolean = false;

  constructor(private incomeService: IncomeService, private spentService: SpentService,
  private breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,

    ]).subscribe(result => {
      if (result.matches) {
        //this.isSmallSize = true;
      }
    });
  }

  ngOnInit(): void {
    this.getNineIncome();
    this.getNineSpentFixed();
    this.getNineSpentVariable();
  }

  async getNineIncome() {
    (await this.incomeService.getNineIncome()).subscribe(data => {
      if (data) {
        this.listIncome = data;
        this.listIncome = this.listIncome.body;
        tranformDateFr(this.listIncome);
      }
    });
  }

  async getNineSpentFixed() {
    (await this.spentService.getNineSpentFixed()).subscribe(data => {
      if (data) {
        this.listSpentFixed = data;
        this.listSpentFixed = this.listSpentFixed.body;
        tranformDateFr(this.listSpentFixed);
      }
    });
  }

  async getNineSpentVariable() {
    (await this.spentService.getNineSpentVariable()).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        this.listSpentVariable = this.listSpentVariable.body;
        tranformDateFr(this.listSpentVariable);
      }
    });
  }
}

function tranformDateFr(list: any) {
  list.forEach((object: any) => {
    object.createdAt = dayjs(object.createdAt).format('DD MMMM YYYY');
  });
}
