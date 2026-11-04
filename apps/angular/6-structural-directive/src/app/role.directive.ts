import {
  Directive,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Role } from './user.model';
import { UserStore } from './user.store';

@Directive({
  selector: '[hasRole]',
})
export class HasRoleDirective {
  templateRef = inject(TemplateRef);
  vcr = inject(ViewContainerRef);
  userStore = inject(UserStore);
  roles = input<Role[]>([], { alias: 'hasRole' });

  constructor() {
    this.userStore.user$.subscribe((user) => {
      if (!user) {
        return;
      }
      this.vcr.clear();
      if (this.roles().length === 0 && user.isAdmin) {
        this.vcr.createEmbeddedView(this.templateRef);
      } else if (user.roles.some((role) => this.roles().includes(role))) {
        this.vcr.createEmbeddedView(this.templateRef);
      } else {
        this.vcr.clear();
      }
    });
  }
}
