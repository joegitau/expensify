import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  budgetForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      amount: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  createRecord() {
    console.log(this.budgetForm);
    console.log('Record: ', JSON.stringify(this.budgetForm.value))
  }
}
