import { inject, Injectable, signal } from '@angular/core';
import { TodoModel } from '../models/todo-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http=inject(HttpClient);
  private todos=signal<TodoModel[]>([]);
  todosPub=this.todos.asReadonly();
  
  getTodos(){
    this.http.get<TodoModel[]>("https://jsonplaceholder.typicode.com/todos").subscribe(response=>{
      this.todos.set(response);
    });
    
  };
  postTodos(adat: TodoModel){
    this.http.post<TodoModel>("https://jsonplaceholder.typicode.com/todos",adat).subscribe(response=>{
      this.todos.update(current=>[...current, adat]);
    });
    };
  deleteTodos(id:number){
    this.http.delete<TodoModel>(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe(response=>{
      const remain=this.todos().filter(todoId=>todoId.id!==id)
      this.todos.set(remain);
    });
    };
 
}
