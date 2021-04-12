import {Component, NgModule, OnInit} from '@angular/core';
import {IncomeService} from "../../services/income-service";
import {SpentService} from "../../services/spent-service";
import * as dayjs from 'dayjs'
import 'dayjs/locale/fr';

dayjs.locale('fr');

@Component({
  selector: 'app-tab-nine',
  templateUrl: './tab-nine.component.html',
  styleUrls: ['./tab-nine.component.css']
})
/*@NgModule({
  imports: [
      MatTabsModule,
  ],
  declarations: [
  ],
  providers: []
})*/
export class TabNineComponent implements OnInit {

  listIncome: any;
  listSpentFixed: any;
  listSpentVariable: any;

  constructor(private incomeService: IncomeService, private spentService: SpentService) {}

  ngOnInit(): void {
    this.getNineIncome();
    this.getNineSpentFixed();
    this.getNineSpentVariable();
  }

  async getNineIncome() {
    (await this.incomeService.getNineIncome()).subscribe(data => {
      if (data) {
        this.listIncome = data;
        tranformDateFr(this.listIncome);
      }
    });
  }

  async getNineSpentFixed() {
    (await this.spentService.getNineSpentFixed()).subscribe(data => {
      if (data) {
        this.listSpentFixed = data;
        tranformDateFr(this.listSpentFixed);
      }
    });
  }

  async getNineSpentVariable() {
    (await this.spentService.getNineSpentVariable()).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        tranformDateFr(this.listSpentVariable);
      }
    });
  }
}

function tranformDateFr(list: any) {
  list.body.forEach((object: any) => {
    object.createdAt = dayjs(object.createdAt).format('DD MMMM YYYY');
  });
}
