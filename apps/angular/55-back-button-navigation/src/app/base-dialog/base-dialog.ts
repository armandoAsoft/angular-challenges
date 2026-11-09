import { AfterContentInit, Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogService } from '../dialog/dialog.service'
import { DialogData, DialogStrategyType } from "../dialog/dialog-strategy";

@Component({
  selector: 'base-dialog',
  template: ''
})
export class BaseDialogComponent implements AfterContentInit {
  readonly #data = inject<DialogData>(MAT_DIALOG_DATA);
  protected readonly dialogService = inject(DialogService)

  ngAfterContentInit() {
    this.initStrategy();
  }

  private initStrategy() {
    const strategyType: DialogStrategyType = this.#data.strategy.type
      ? this.#data.strategy.type
      : 'default';

    this.dialogService.setStrategy(strategyType);
  }
}