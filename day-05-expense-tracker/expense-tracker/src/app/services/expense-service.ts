import { Injectable, signal } from '@angular/core';
import { ExpenseModel } from '../models/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  saveToLocalStorage()
  {
   const readedData=this.data();
   const readedDataJson=JSON.stringify(readedData);
   localStorage.setItem('expenses',readedDataJson);
  }
  private data=signal<ExpenseModel[]>([]);
  constructor()
  {
    const saved=localStorage.getItem('expenses');

    if(saved)
    {
      const parsedExpenses=JSON.parse(saved);
      this.data.set(parsedExpenses);
    }
  }
  addExpense(newExpense: ExpenseModel)
  {
    this.data.update(current=>[...current,newExpense]);
    this.saveToLocalStorage();
  }
  deleteExpense(id:number)
  {
    const curreExpense=this.data().filter(expenseId=>expenseId.id!==id);
    this.data.set(curreExpense);
    this.saveToLocalStorage();
  }
  expensePub=this.data.asReadonly();
}

