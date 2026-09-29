import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CurrencyPipe],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenseService=inject(ExpenseService);
}
