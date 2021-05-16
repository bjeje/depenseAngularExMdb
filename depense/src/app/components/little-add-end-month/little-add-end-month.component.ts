import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EndMonthService } from '../../services/endMonth.service';
import { UserService } from '../../services/user.services';

interface EndMonth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-little-add-end-month',
  templateUrl: './little-add-end-month.component.html',
  styleUrls: ['./little-add-end-month.component.css']
})
export class LittleAddEndMonthComponent implements OnInit {

  endMonthForm = this.formBuilder.group({
    value: ['', Validators.required],
    type_account: [''],
  });

  endMonths: EndMonth[] = [
    { value: 'Compte chèque', viewValue: 'Compte chèque' },
  ];

  constructor(private formBuilder: FormBuilder, private EndMonth: EndMonthService, private User: UserService) { }

  ngOnInit(): void {
  }

  async addCategory() {
    this.endMonthForm.value.type_account = this.endMonthForm.value.type_account.value;
    this.endMonthForm.value.owner = this.User.getIdUserConnected();
    console.log(this.endMonthForm.value);

    (await this.EndMonth.createEndMonth(this.endMonthForm.value)).subscribe(
      (data: any) => {
        if(data) {
          console.log(data);
          this.resetForm();
          window.location.reload()
        }
      },
    );
  }

  resetForm() {
    this.endMonthForm.reset();
  }
}
