import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CanComponentLeave } from '../guards/can-leave.guard';
import { DialogService } from '../dialog/dialog.service';
import { RouterLink } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-simple-action',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './simple-action.component.html'
})
export class SimpleActionComponent implements CanComponentLeave{
  readonly #dialogService = inject(DialogService);

  openDialog(): void {
    this.#dialogService.openDialog(DialogComponent, {
      width: '450px',
      data: { strategy: {type: 'default'} },
      closeOnNavigation: false
    });
  }

  canLeave() {
    console.log('active simple dialog', this.#dialogService.getActiveDialog());
    this.#dialogService.closeActiveDialog();
    return this.#dialogService.getStrategyType()?.onBackBrowsernavigation() ?? true;
  }
}
