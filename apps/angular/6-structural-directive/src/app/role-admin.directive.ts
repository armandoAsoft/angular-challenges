import {
  Directive,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserStore } from './user.store';

@Directive({
  selector: '[hasRoleAdmin]',
})
export class HasRoleAdminDirective {
  templateRef = inject(TemplateRef);
  vcr = inject(ViewContainerRef);
  userStore = inject(UserStore);
  isAdmin = input<boolean>(false, { alias: 'hasRoleAdmin' });

  constructor() {
    this.userStore.user$.subscribe((user) => {
      if (user?.isAdmin && this.isAdmin()) {
        this.vcr.createEmbeddedView(this.templateRef);
      } else {
        this.vcr.clear();
      }
    });
  }
}
