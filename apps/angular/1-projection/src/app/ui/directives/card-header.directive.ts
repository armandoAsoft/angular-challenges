import { Directive, inject, TemplateRef } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Directive({
  selector: '[cardHeader]',
})
export class CardHeaderDirective {
  card = inject(CardComponent);
  templateRef = inject(TemplateRef);

  constructor() {
    this.card.header.set(this.templateRef);
  }
}
