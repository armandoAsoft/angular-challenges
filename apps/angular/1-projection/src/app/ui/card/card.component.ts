import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass()">
      <ng-container *ngTemplateOutlet="header()"></ng-container>

      <section>
        @for (item of list(); track item) {
          <ng-container
            *ngTemplateOutlet="
              itemTemplate();
              context: { $implicit: item }
            "></ng-container>
        }
      </section>

      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgTemplateOutlet],
})
export class CardComponent {
  readonly list = input<any[] | null>(null);
  readonly customClass = input('');
  header = signal<TemplateRef<any> | null>(null);
  itemTemplate = signal<TemplateRef<any> | null>(null);
}
