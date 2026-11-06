import { inject, InjectionToken, InjectOptions, Signal } from '@angular/core';

export type ButtonState = 'enabled' | 'disabled';
export interface buttonStateSignal {
  state: Signal<ButtonState>;
}

export const BUTTON_STATE_TOKEN = new InjectionToken<buttonStateSignal>(
  'BUTTON_STATE_TOKEN',
);

export const injectionBtnToken = (options: InjectOptions) =>
  inject(BUTTON_STATE_TOKEN, options);
