import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-expense-form',
  imports: [ReactiveFormsModule],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css',
})
export class ExpenseForm {
  service=inject(ExpenseService);
  form=new FormGroup({
    title: new FormControl("",[Validators.required]),
    amount: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required])

  });
  addExpense(){
    const idList=this.service.expensePub().map(expenseName=>expenseName.id);
    const maxID=Math.max(...idList);
    const newID=maxID+1;
    const formValues=this.form.value;
    const newData={
      title:formValues.title as string,
      amount: Number(formValues.amount),
      date: new Date(formValues.date as string) ,
      id:newID,

    }
    this.service.addExpense(newData);
  }
}
