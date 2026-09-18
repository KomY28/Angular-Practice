import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { TodoModel } from '../../models/todo-model';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit{
  todoService= inject(TodoService);
  


  ngOnInit(): void {
    this.todoService.getTodos();
  }
}

