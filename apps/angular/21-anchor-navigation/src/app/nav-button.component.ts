/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-button',
  imports: [RouterLink],
  template: `
    <a [routerLink]="[href()]">
      <ng-content />
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    role: 'button',
    tabindex: '0',
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
    '(click)': 'clicked()',
  },
})
export class NavButtonComponent {
  href = input('');
  docuemnt = inject(DOCUMENT);

  clicked() {
    let element = this.docuemnt.getElementById(this.href().substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('clicked', this.href());
    }
  }
}
