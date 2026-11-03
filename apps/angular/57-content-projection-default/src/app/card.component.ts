import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
} from '@angular/core';
import { MessageDirective } from './message.directive';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <ng-content select="[title]"></ng-content>
    @if (message()) {
      <ng-content select="[message]" />
    } @else {
      <div>Aucun message</div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  message = contentChild(MessageDirective);
}
