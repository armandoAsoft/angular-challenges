import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimerContainerComponent } from './timer-container.component';

@Component({
  selector: 'app-video',
  imports: [TimerContainerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="flex gap-2">
      Video Call Timer:
      <p class="italic">(should be the default 1000s)</p>
    </div>
    <timer-container />
  `,
  // providers: [
  //   {
  //     provide: DEFAULT_TIMER, useValue: 1000
  //   }
  // ]
})
export default class VideoComponent {}
