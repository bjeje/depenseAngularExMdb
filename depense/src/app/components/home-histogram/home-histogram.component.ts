import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {SpentService} from '@app/services/spent-service';

interface spentModel {
  name : string;
  value : number;
}

@Component({
  selector: 'app-home-histogram',
  templateUrl: './home-histogram.component.html',
  styleUrls: ['./home-histogram.component.css']
})

export class HomeHistogramComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  typeHistogram = "Histogram";
  nameIcon = "donut_large";

  listSpentVariable: any;
  arrListSpentVariable: any[] = [];
  nbr = 0;
  /*------COLOR ------*/
  colorHistogram: any = ['#FF0005', '#E8E8EE', '#E8E8EE', '#E8E8EE', '#E8E8EE', '#E8E8EE','#E8E8EE','#E8E8EE'];
  colorDiagram: any = ['#FF0005', '#e5644e', '#f18951', '#f9ac5c', '#fdcf71', '\n' +
  '#fff18f','#cede82','#9fca7a'];
  /*------ SIZE------*/
  sizeHistogram: any = [440, 290];
  sizeDiagram: any = [350, 250];
  /*------ label Diagram ------*/
  label: boolean = false;


  /* [legendTitle]="legendTitle"
      [legendPosition]="legendPosition" [animations]="animations"*/
  //nameIcon = "bar_chart";//donut_large

  view = this.sizeHistogram;

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
    domain: this.colorHistogram,
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'
  roundEdges: boolean = false;
  barPadding: number = 5
  tooltipDisabled: boolean = false;

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
            let newSpent : spentModel = {name: spent._id, value: Math.round(spent.value)};
            this.arrListSpentVariable.push(newSpent);
            this.nbr++;
            // @ts-ignore

          }
        });
        this.arrListSpentVariable = [...this.arrListSpentVariable];
        /*let last = this.listSpentVariable.length;
        this.totalSpentVariable = this.listSpentVariable[last-1];*/
      }
    });
  }

  changeTypeHistogram() {
    this.typeHistogram === "Histogram" ? this.typeHistogram = "Diagram" : this.typeHistogram = "Histogram";
    this.nameIcon === "bar_chart" ? this.nameIcon = "donut_large" : this.nameIcon = "bar_chart";

    if(this.typeHistogram === "Histogram") {
      this.colorScheme.domain = this.colorHistogram;
      this.view = this.sizeHistogram;
      this.gradient = false;
      this.legend = false;
    } else {
      this.colorScheme.domain = this.colorDiagram;
      this.view = this.sizeDiagram;
      this.gradient = true;
      this.legend = false;
    }

  }

  async getSignificantCosts() {

  }

}
