import { CanDeactivateFn, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export type CanLeaveType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree

export interface CanComponentLeave {
  canLeave: () => CanLeaveType
}

export const canLeaveGuard: CanDeactivateFn<CanComponentLeave> = (component) => {
  console.log('---', component.canLeave());
  return component.canLeave() ?? true;
}