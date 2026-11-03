import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card.component';
import { MessageDirective } from './message.directive';

@Component({
  imports: [CardComponent, MessageDirective],
  selector: 'app-root',
  template: `
    <app-card>
      <div title>Titre 1</div>
      <div message>Message 1</div>
    </app-card>
    <app-card>
      <div title>Titre 2</div>
    </app-card>
  `,
  host: {
    class: 'p-4 block flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
