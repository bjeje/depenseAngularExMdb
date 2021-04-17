import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private User: UserService, private router: Router, private AuthService: AuthService) {}
    loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

    async signin() {
    (await this.AuthService.signIn(this.loginForm.value));

  /*async signin() {
    (await this.User.signIn(this.loginForm.value)).subscribe(
      (data: any) => {
        //let token = data.body;
        console.log(data);
        //localStorage.setItem('Token', token);

      },
    );*/
    /*this.User.signin({login: login, password: password})*/
  }
  ngOnInit() {}

}
