import { Directive, inject, TemplateRef } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Directive({
  selector: '[cardItem]',
})
export class CardItemDirective {
  card = inject(CardComponent);
  templateRef = inject(TemplateRef);

  constructor() {
    this.card.itemTemplate.set(this.templateRef);
  }
}
