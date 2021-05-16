import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import {UserService} from '@app/services/user.services';
import {AuthService} from '@app/shared/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

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

  constructor(fb: FormBuilder, private UserService: UserService, private AuthService: AuthService,
  private breakpointObserver: BreakpointObserver) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

    breakpointObserver.observe([

      Breakpoints.HandsetPortrait,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.isMenuOpen = false;
      }
    });

    this.firstname = this.UserService.getFirstname();
  }




  chooseWidthMenu() {

  }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    /* Send value menu to parents */
    this.getMenuOpen(this.isMenuOpen);
  }


  /*@HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }*/

  /* send to other page if left menu is open */

  getMenuOpen(value: boolean) {
    this.sendLeftMenuStatus.emit(value);
  }

  disconnect() {
    this.AuthService.logout();
  }

}
