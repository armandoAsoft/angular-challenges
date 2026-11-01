import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { randText } from '@ngneat/falso';
import { Todos } from './core/model/todos.model';
import { LoaderService } from './core/services/loader.service';
import { TodosService } from './core/services/todos.service';
import { LoaderComponent } from './shared/loader.component';

@Component({
  imports: [LoaderComponent],
  selector: 'app-root',
  template: `
    <app-custom-loader></app-custom-loader>
    <table>
      <tbody>
        @for (todo of todos(); track todo.id) {
          <tr>
            <td>
              {{ todo.title }}
            </td>
            <td>
              <button (click)="update(todo)">Update</button>
            </td>
            <td>
              <button (click)="delete(todo.id)">Delete</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [],
})
export class AppComponent implements OnInit {
  private todosService = inject(TodosService);
  protected loaderService = inject(LoaderService);

  // private http = inject(HttpClient);

  todos = this.todosService.todos;

  ngOnInit(): void {
    // this.http
    //   .get<any[]>('https://jsonplaceholder.typicode.com/todos')
    //   .subscribe((todos) => {
    //     this.todos = todos;
    //   });
  }

  update(todo: Todos) {
    // this.http
    //   .put<any>(
    //     `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    //     JSON.stringify({
    //       todo: todo.id,
    //       title: randText(),
    //       body: todo.body,
    //       userId: todo.userId,
    //     }),
    //     {
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     },
    //   )
    //   .subscribe((todoUpdated: any) => {
    //     this.todos[todoUpdated.id - 1] = todoUpdated;
    //   });
    todo.title = randText();
    this.todosService.update(todo);
  }

  delete(id: number) {
    this.todosService.delete(id);
  }
}
