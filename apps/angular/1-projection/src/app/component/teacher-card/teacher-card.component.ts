import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FakeHttpService,
  randTeacher,
} from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { CardHeaderDirective } from '../../ui/directives/card-header.directive';
import { CardItemDirective } from '../../ui/directives/card-item.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [list]="teachers()" customClass="bg-light-red">
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="onAdd()">
        Add
      </button>

      <ng-template cardHeader>
        <img ngSrc="assets/img/teacher.png" width="200" height="200" alt="" />
      </ng-template>

      <ng-template cardItem let-teacher>
        <app-list-item
          [name]="teacher.firstName"
          [id]="teacher.id"
          (delete)="onDelete($event)"></app-list-item>
      </ng-template>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    CardComponent,
    NgOptimizedImage,
    ListItemComponent,
    CardHeaderDirective,
    CardItemDirective,
  ],
})
export class TeacherCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(TeacherStore);

  teachers = this.store.teachers;
  cardType = CardType.TEACHER;

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }

  onDelete(id: number) {
    this.store.deleteOne(id);
  }

  onAdd() {
    this.store.addOne(randTeacher());
  }
}
