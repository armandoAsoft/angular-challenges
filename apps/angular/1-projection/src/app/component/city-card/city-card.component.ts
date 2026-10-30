import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { CardHeaderDirective } from '../../ui/directives/card-header.directive';
import { CardItemDirective } from '../../ui/directives/card-item.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card [list]="cities()" customClass="bg-light-blue">
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="onAdd()">
        Add
      </button>

      <ng-template cardHeader>
        <img ngSrc="assets/img/city.png" width="200" height="200" alt="" />
      </ng-template>

      <ng-template cardItem let-city>
        <app-list-item
          [name]="city.name"
          [id]="city.id"
          (delete)="onDelete($event)"></app-list-item>
      </ng-template>
    </app-card>
  `,
  imports: [
    CardComponent,
    NgOptimizedImage,
    ListItemComponent,
    CardHeaderDirective,
    CardItemDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent {
  private http = inject(FakeHttpService);
  private store = inject(CityStore);

  cities = this.store.cities;
  cardType = CardType.CITY;

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((t) => this.store.addAll(t));
  }

  onDelete(id: number) {
    this.store.deleteOne(id);
  }

  onAdd() {
    this.store.addOne(randomCity());
  }
}
