import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  imgMen:any = "assets/img/men.jpg";
  imgWoman:any = "assets/img/men.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
