import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '@app/services/user.services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  /*emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);*/

  constructor(private userService: UserService, private router: Router) {}

  registerForm = new FormGroup({
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]),
    password: new FormControl('' ,[Validators.required]),
    email: new FormControl('' ,[Validators.required]),
    name: new FormControl(''),
    firstname: new FormControl(''),
    city: new FormControl(''),
    birthdate: new FormControl(''),
  });
  ngOnInit() {}

    async signup() {
      (await this.userService.signup(this.registerForm.value)).subscribe(
        (data: any) => {
          if(data) {
            this.router.navigate([ '/login' ]);
          }
        },
      );
    }
}
