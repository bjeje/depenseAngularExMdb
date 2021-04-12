import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private User: UserService, private router: Router) {}
    loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  async signin() {
    (await this.User.signin(this.loginForm.value)).subscribe(
      (data: any) => {
        let token = data.body;
        console.log(data);
        localStorage.setItem('Token', token);
        this.router.navigate([ '/home' ]);
      },
      /*(err: HttpErrorResponse) => {
        console.log(err.error);
        if (err.error.msg) {
          this.snackBar.open(err.error.msg, 'Undo');
        } else {
          this.snackBar.open('Something Went Wrong!');
        }
      }*/
    );
    /*this.User.signin({login: login, password: password})*/
  }
  ngOnInit() {}

}
