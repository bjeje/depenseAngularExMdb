import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    (await this.userService.getTests()).subscribe(data => {
      if (data) {
        console.log(data);
        this.listUser = data;
      }
    });
  }

}
