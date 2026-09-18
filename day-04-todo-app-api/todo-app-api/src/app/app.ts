import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./components/todo-list/todo-list";
import { TodoAdd } from './components/todo-add/todo-add';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, TodoAdd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app-api');
}
