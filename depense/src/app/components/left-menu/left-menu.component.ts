import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HostListener} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {UserService} from '@app/services/user.services';
import {AuthService} from '@app/shared/auth.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnInit {
  @Output() sendLeftMenuStatus = new EventEmitter<boolean>();
  options: FormGroup;

  isMenuOpen = true;
  firstname: string = "";

  imgMen:any = "assets/img/men.jpg";
  imgWoman:any = "assets/img/woman.jpg";
  constructor(fb: FormBuilder, private UserService: UserService, private AuthService: AuthService) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
    this.getScreenHeight();

    this.firstname = this.UserService.getFirstname();
  }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
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

  disconnect() {
    this.AuthService.logout();
  }

}
