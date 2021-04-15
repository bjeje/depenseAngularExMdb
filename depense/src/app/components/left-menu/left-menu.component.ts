import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HostListener} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {sendMessageToMaster} from '@angular/compiler-cli/ngcc/src/execution/cluster/utils';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})


export class LeftMenuComponent implements OnInit {
  @Output() sendLeftMenuStatus = new EventEmitter<boolean>();
  options: FormGroup;

  isMenuOpen = true;
  contentMargin = 10;

  imgMen:any = "assets/img/men.jpg";
  imgWoman:any = "assets/img/men.jpg";
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
    this.getScreenHeight();
  }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 0;
    } else {
      this.contentMargin = 10;
    }
    /* Send value menu to parents */
    this.getMenuOpen(this.isMenuOpen);
  }

  appropriateClass:string = '';

  @HostListener('window:resize', ['$event'])
  getScreenHeight(){
    //console.log(window.innerHeight);
    if(window.innerHeight<=412){
      this.appropriateClass = 'bottomRelative';
    }else{
      this.appropriateClass = 'bottomStick';
    }
  }

  /* send to other page if left menu is open */

  getMenuOpen(value: boolean) {
    this.sendLeftMenuStatus.emit(value);
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
