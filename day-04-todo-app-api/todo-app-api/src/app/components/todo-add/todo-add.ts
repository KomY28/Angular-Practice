import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-add',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
  service=inject(TodoService);
  form=new FormGroup({
    title: new FormControl("",[Validators.required]),
  })

  addToDo(){
    const idToDo=this.service.todosPub().map(toDo=>toDo.id);
    const maxId=Math.max(...idToDo);
    const newId=maxId+1;

    const formValues=this.form.value;

    const newData={
      title:formValues.title as string,
      id:newId,
      completed: false,
      userId: newId
    }
    this.service.postTodos(newData);
  }
}
