import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { LeftMenuComponent } from '../../components/left-menu/left-menu.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  isMenuOpen = true;
  constructor() {}

  compoCreate = "Variable";

  ngOnInit(): void {
  }

  changeCompoAdd(value: string) {
    this.compoCreate = value;
  }


  sendStatusMenu(newStatusMenu: boolean) {
    console.log(newStatusMenu);
    this.isMenuOpen = newStatusMenu;
  }

}
