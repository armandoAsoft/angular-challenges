// import { TestBed } from '@angular/core/testing';
// import { TodosService } from './todos.service';
// import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// describe('TodosService', () => {
//   let service: TodosService;

//   const fakeHttpClient = {
//     get: () => of([]),
//     delete: () => of(true)
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [{provide: HttpClient, useValue: fakeHttpClient}]
//     });
//     service = TestBed.inject(TodosService);
//   });

//   it('get todos list', () => {
//     service.getTodos();
//     expect(service.todos()).toBe(0)
//   });
// });
