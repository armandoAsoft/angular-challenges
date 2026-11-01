import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormatDataPipe } from './core/pipes/format-data.pipe';

@Component({
  selector: 'app-root',
  imports: [FormatDataPipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    @for (person of persons; track person) {
      {{ person | formatData: $index }}
    }
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
