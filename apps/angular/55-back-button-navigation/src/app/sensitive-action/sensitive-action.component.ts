import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CanComponentLeave } from '../guards/can-leave.guard';
import { DialogService } from '../dialog/dialog.service';
import { SensitiveDialogComponent } from '../dialog/sensitive-dialog/sensitive-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-sensitive-action',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './sensitive-action.component.html',
})
export class SensitiveActionComponent implements CanComponentLeave {
  readonly #dialogService = inject(DialogService);

  openDialog(): void {
    this.#dialogService.openDialog(SensitiveDialogComponent, {
      width: '450px',
      data: { strategy: {type: 'confirm'} },
      closeOnNavigation: false
    });
  }

  canLeave() {
    return this.#dialogService.getStrategyType()?.onBackBrowsernavigation() ?? true;
  }
}
