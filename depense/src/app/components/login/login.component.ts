import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string = "";

  constructor(private User: UserService, private router: Router, private AuthService: AuthService) {}
    loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

    async signin() {
    (await this.AuthService.signIn(this.loginForm.value)).subscribe((res: any) => {

        localStorage.setItem('Token', res.body)
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loginError = "Login ou Mot de passe incorrect !";
      })

  }
  ngOnInit() {}

}
