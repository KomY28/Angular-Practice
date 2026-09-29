import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseList } from './components/expense-list/expense-list';
import { ExpenseForm } from './components/expense-form/expense-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseList, ExpenseForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker');
}
