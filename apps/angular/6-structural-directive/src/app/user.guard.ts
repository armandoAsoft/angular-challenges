import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CanMatchFn } from '@angular/router';
import { UserStore } from './user.store';

export const userGuard: CanMatchFn = (route, segments) => {
  const userStore = inject(UserStore);
  const user = toSignal(userStore.user$, { initialValue: undefined });

  if (user()?.isAdmin) {
    return false;
  }

  return true;
};
