import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  isIncome: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
