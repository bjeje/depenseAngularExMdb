import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpentService } from '../../services/spent-service';
import { UserService } from '../../services/user.services';

interface Spent {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-little-add-fixed',
  templateUrl: './little-add-fixed.component.html',
  styleUrls: ['./little-add-fixed.component.css']
})
export class LittleAddFixedComponent implements OnInit {

  spentForm = this.formBuilder.group({
    value: ['', Validators.required],
    category: ["spentFixed"],
    sub_category: ['', Validators.required]
  });

  spents: Spent[] = [
    {value: 'Loyer', viewValue: 'Loyer'},
    {value: 'Electicite', viewValue: 'Cadeau'},
    {value: 'Eau', viewValue: 'Eau'},
    {value: 'Credit', viewValue: 'Crédits'},
    {value: 'Assurance', viewValue: 'Assurance'},
    {value: 'Forfait', viewValue: 'Forfait'},
    {value: 'Impots', viewValue: 'Impôts'},
    {value: 'Banque', viewValue: 'Banque'},
  ];

  constructor(private formBuilder: FormBuilder, private Spent: SpentService, private User: UserService) { }

  ngOnInit(): void {

  }

  async addCategory() {
    this.spentForm.value.sub_category = this.spentForm.value.sub_category.value;
    this.spentForm.value.owner = this.User.getIdUserConnected();

    (await this.Spent.createSpent(this.spentForm.value)).subscribe(
      (data: any) => {
        if(data) {
          console.log(data);
          this.resetForm();
          window.location.reload();
        }
      },
    );
  }

  resetForm() {
    this.spentForm.reset();
  }
}
