import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { CardHeaderDirective } from '../../ui/directives/card-header.directive';
import { CardItemDirective } from '../../ui/directives/card-item.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card [list]="students()" customClass="bg-light-green">
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="onAdd()">
        Add
      </button>

      <ng-template cardHeader>
        <img ngSrc="assets/img/student.webp" width="200" height="200" alt="" />
      </ng-template>

      <ng-template cardItem let-student>
        <app-list-item
          [name]="student.firstName"
          [id]="student.id"
          (delete)="onDelete($event)"></app-list-item>
      </ng-template>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-green {
        background-color: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
  imports: [
    CardComponent,
    NgOptimizedImage,
    ListItemComponent,
    CardHeaderDirective,
    CardItemDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(StudentStore);

  students = this.store.students;
  cardType = CardType.STUDENT;

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  onDelete(id: number) {
    this.store.deleteOne(id);
  }

  onAdd() {
    this.store.addOne(randStudent());
  }
}
