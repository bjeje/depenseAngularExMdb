import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IncomeService } from '../../services/income-service';
import { UserService } from '../../services/user.services';


interface Income {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-little-add-income',
  templateUrl: './little-add-income.component.html',
  styleUrls: ['./little-add-income.component.css']
})
export class LittleAddIncomeComponent implements OnInit {
  incomeForm = this.formBuilder.group({
    value: ['', Validators.required],
    category: ['', Validators.required]
  });

  incomes: Income[] = [
    {value: 'Salaire', viewValue: 'Salaire'},
    {value: 'Bourse', viewValue: 'Bourse'},
    {value: 'Cadeau', viewValue: 'Cadeau'},
    {value: 'Autre', viewValue: 'Autre'},
  ];

  constructor(private formBuilder: FormBuilder, private Income: IncomeService, private User:UserService) { }

  ngOnInit(): void {
  }
  async addCategory() {
    this.incomeForm.value.category = this.incomeForm.value.category.value;
    this.incomeForm.value.owner = this.User.getIdUserConnected();

    (await this.Income.createIncome(this.incomeForm.value)).subscribe(
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
    this.incomeForm.reset();
  }
}
