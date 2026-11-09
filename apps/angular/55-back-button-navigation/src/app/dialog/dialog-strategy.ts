import { inject, Injectable } from "@angular/core";
import { DialogService } from "./dialog.service";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

export type DialogStrategyType = 'default' | 'confirm';

export type DialogData = {
  strategy: {
    type: DialogStrategyType
  }
}

export abstract class DialogStrategy {
  protected readonly dialogService = inject(DialogService);

  abstract onBackBrowsernavigation(): boolean
}

@Injectable({
  providedIn: 'root'
})
export class DefaultDialogStrategy extends DialogStrategy {
  override onBackBrowsernavigation(): boolean {
    this.dialogService.closeActiveDialog();
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogStrategy extends DialogStrategy {
  override onBackBrowsernavigation(): boolean {
    this.dialogService.openDialog(ConfirmDialogComponent, {
      width: '250px',
      closeOnNavigation: false
    });

    return false;
  }
}

export const DialogStrategyMap = new Map<DialogStrategyType, any>([
  ['confirm', ConfirmDialogStrategy],
  ['default', DefaultDialogStrategy]
]);

