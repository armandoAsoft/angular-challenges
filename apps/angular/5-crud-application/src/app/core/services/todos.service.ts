import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Todos } from '../model/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  private todosSignal = signal<Todos[]>([]);
  todos = this.todosSignal.asReadonly();

  constructor() {
    this.getTodos();
  }

  getTodos() {
    return this.http.get<Todos[]>(this.baseUrl).subscribe((res) => {
      this.todosSignal.set(res);
    });
  }

  update(todo: Todos) {
    this.http
      .put<Todos>(`${this.baseUrl}/${todo.id}`, todo)
      .subscribe((todo) => {
        this.todosSignal.update((todoOld) =>
          todoOld.map((t) => (t.id === todo.id ? todo : t)),
        );
      });
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}/id`).subscribe((res) => {
      this.todosSignal.update((old) => old.filter((t) => t.id !== id));
    });
  }
}
