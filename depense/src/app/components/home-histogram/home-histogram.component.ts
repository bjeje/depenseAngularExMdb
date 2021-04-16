import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {SpentService} from '@app/services/spent-service';

@Component({
  selector: 'app-home-histogram',
  templateUrl: './home-histogram.component.html',
  styleUrls: ['./home-histogram.component.css']
})

export class HomeHistogramComponent implements OnInit {

  typeHistogram = "Histogram";
  nameIcon = "bar_chart";

  listSpentVariable: any;
  arrListSpentVariable = [];
  nbr = 0;

  view: any = [450, 290];

  // options
  legendTitle: string = 'Dépense';
  //legendTitleMulti: string = 'Dépense';
  legendPosition: string = 'right'; // ['right', 'below']
  legend: boolean = false;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Montants';
  xAxisLabel: string = 'Dépenses';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 3; // number of letter Name
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = true;
  trimYAxisTicks: boolean = true;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1']
  yAxisTicks: any[] = [75, 150, 300, 500]

  animations: boolean = false; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme = {
    domain: ['#E8E8EE', '#FF0005']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'
  roundEdges: boolean = false;
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private spentService: SpentService) {
  }

  ngOnInit(): void {
    this.getSpentByDateAndCategory();

    this.getSignificantCosts();
  }

  async getSpentByDateAndCategory() {
    (await this.spentService.getSpentByDateAndCategory("2021-04-01", "2021-04-30")).subscribe(data => {
      if (data) {
        this.listSpentVariable = data;
        this.listSpentVariable = this.listSpentVariable.body;

        this.listSpentVariable.forEach((spent: any) => {
          if (spent.category === "spentVariable") {

            // @ts-ignore
            this.arrListSpentVariable.push({name: spent._id, value: spent.value});
            this.nbr++;
            // @ts-ignore

          }
        });
        this.arrListSpentVariable = [...this.arrListSpentVariable];
        console.log(this.listSpentVariable);
        /*let last = this.listSpentVariable.length;
        this.totalSpentVariable = this.listSpentVariable[last-1];*/
      }
    });
  }

  changeTypeHistogram() {
    this.typeHistogram === "Histogram" ? this.typeHistogram = "Diagram" : this.typeHistogram = "Histogram";
    this.nameIcon === "bar_chart" ? this.nameIcon = "donut_large" : this.nameIcon = "bar_chart";
    //nameIcon = "bar_chart";//donut_large
  }

  async getSignificantCosts() {

  }

}
