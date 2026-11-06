/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextComponent } from './text.component';

export type StaticTextType = 'normal' | 'warning' | 'error';

@Component({
  selector: 'static-text',
  imports: [TextComponent],
  template: `
    <text>This is a static text</text>
  `,
  styleUrls: ['./static-text.style.css'],
})
export class TextStaticComponent {}
