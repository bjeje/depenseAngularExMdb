import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '@app/services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  loginError = "Login requis";
  passwordError = "Mot de passe requis";
  nameError = "Nom invalide !";
  firstnameError = "Prénom invalide !";
  emailError = "E-mail requis !";
  cityError = "Ville invalide !";
  postalCodeError = "Code postal invalide !";
  birthdateError = "Date de naissance invalide !";

  constructor(private userService: UserService, private router: Router) {}

  registerForm = new FormGroup({
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]),
    password: new FormControl('' ,[Validators.required]),
    email: new FormControl('' , [Validators.required, Validators.email]),
    name: new FormControl('', Validators.maxLength(60)),
    firstname: new FormControl('', Validators.maxLength(60)),
    city: new FormControl('', Validators.maxLength(60)),
    postalCode: new FormControl('', Validators.maxLength(5)),
    birthdate: new FormControl('',Validators.maxLength(10)),
  });

  ngOnInit() {}

    async signup() {

      (await this.userService.signup(this.registerForm.value)).subscribe(
        (data: any) => {
          if(data) {
            this.router.navigate([ '/login' ]);
          }
        },
        (error) => {                              //Error callback
          console.log(error.error.errors);
          error.error.errors.forEach( (error: any) => {
            //console.log(error.param + " = " +error.msg)
            this.distribErrorReturn(error.param, error.msg);
          });
        }
      );
    }

  private distribErrorReturn(nameInput: string, msg: string) {

    switch (nameInput) {
      case "login":
        this.loginError = msg;
        break;
      case "password":
        this.passwordError = msg;
        break;
      case "name":
        console.log(this.registerForm.controls[nameInput]);
        this.registerForm.controls[nameInput].status = "INVALID";
        this.nameError = msg;
        break;
      case "firstname":
        this.registerForm.controls[nameInput].status = "INVALID";
        this.firstnameError = msg;
        break;
      case "email":
        this.emailError = msg;
        break;
      case "city":
        this.registerForm.controls[nameInput].status = "INVALID";
        this.cityError = msg;
        break;
      case "postalCode":
        this.registerForm.controls[nameInput].status = "INVALID";
        this.postalCodeError = msg;
        break;
      case "birthDate":
        this.registerForm.controls[nameInput].status = "INVALID";
        this.birthdateError = msg;
        break;
    }
  }

  public checkError = (controlName: string) => {
    //return this.registerForm.controls[controlName].hasError(errorName);
    return this.registerForm.controls[controlName].status;
  }
}
