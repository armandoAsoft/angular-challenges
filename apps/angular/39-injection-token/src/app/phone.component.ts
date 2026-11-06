import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DEFAULT_TIMER } from './data';
import { TimerContainerComponent } from './timer-container.component';

@Component({
  selector: 'app-phone',
  imports: [TimerContainerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="flex gap-2">
      Phone Call Timer:
      <p class="italic">(should be 2000s)</p>
    </div>
    <timer-container />
  `,
  providers: [
    {
      provide: DEFAULT_TIMER,
      useValue: 2000,
    },
  ],
})
export default class PhoneComponent {}
