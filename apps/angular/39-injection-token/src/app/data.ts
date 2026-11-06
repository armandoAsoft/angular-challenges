import { InjectionToken } from '@angular/core';

export const DEFAULT_TIMER = new InjectionToken<number>('counter', {
  providedIn: 'root',
  factory: () => 1000,
});
