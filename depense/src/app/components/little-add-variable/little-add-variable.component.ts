import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpentService } from '../../services/spent-service';
import { UserService } from '../../services/user.services';

interface Spent {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-little-add-variable',
  templateUrl: './little-add-variable.component.html',
  styleUrls: ['./little-add-variable.component.css']
})
export class LittleAddVariableComponent implements OnInit {
  spentForm = this.formBuilder.group({
    value: ['', Validators.required],
    category: ["spentVariable"],
    sub_category: ['', Validators.required]
  });

  spents: Spent[] = [
    {value: 'Course', viewValue: 'Course'},
    {value: 'Essence', viewValue: 'Essence'},
    {value: 'Cigarette', viewValue: 'Cigarette'},
    {value: 'Loisir', viewValue: 'Loisir'},
    {value: 'Vetements', viewValue: 'Vêtements'},
    {value: 'Voiture', viewValue: 'Voiture'},
    {value: 'Medical', viewValue: 'Medical'},
    {value: 'Divers', viewValue: 'Divers'},
  ];

  constructor(private formBuilder: FormBuilder, private Spent: SpentService, private User: UserService) { }

  ngOnInit(): void {
  }

  async addCategory() {
    this.spentForm.value.sub_category = this.spentForm.value.sub_category.value;
    this.spentForm.value.owner = this.User.getIdUserConnected();
    console.log(this.spentForm.value);

    (await this.Spent.createSpent(this.spentForm.value)).subscribe(
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
    this.spentForm.reset();
  }

}
