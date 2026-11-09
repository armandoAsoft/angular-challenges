import { inject, Injectable, Injector } from "@angular/core";
import { ComponentType } from '@angular/cdk/portal'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogStrategy, DialogStrategyMap, DialogStrategyType } from "./dialog-strategy";
import { take, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly #dialog = inject(MatDialog);
  readonly #dialogStrategyState: {
    id: string;
    type: DialogStrategy;
    active: boolean
  }[] = [];

  readonly #injector = inject(Injector);

  openDialog<T extends ComponentType<any>, Z extends MatDialogConfig<any>>(component: T, config: Z) {
    const dialogRef = this.#dialog.open<T, Z>(component, config);

    dialogRef.afterClosed().pipe(
      take(1),
      tap(() => this.removeDialogStrategyById(dialogRef.id))
    ).subscribe()
  }

  setStrategy(type: DialogStrategyType) {
    this.#dialog.openDialogs.forEach(d => {
      const state = this.getDialogStrategyById(d.id);

      if (!state) {
        this.addDialogStrategyState(d.id, type)
      }
    })
  }

  getStrategyType() {
    const active = this.getActiveDialog();
    if(!active) {
      return null;
    }

    return this.getDialogStrategyById(active.id)?.type;
  }

  addDialogStrategyState(id: string, type: DialogStrategyType) {
    const t = this.#injector.get<DialogStrategy>(DialogStrategyMap.get(type));
    this.#dialogStrategyState.map(x => x.active = false);
    this.#dialogStrategyState.push({id, type: t, active: true});
  }

  getDialogStrategyById(id: string) {
    return this.#dialogStrategyState.find(s => s.id === id);
  }

  closeActiveDialog() {
    const activeDialog = this.#dialogStrategyState.find(d => d.active);
    if (!activeDialog) {
      return;
    }

    this.#dialog.getDialogById(activeDialog.id)?.close();
  }

  closeAll() {
    this.#dialogStrategyState.splice(0, this.#dialogStrategyState.length);

    this.#dialog.closeAll();
  }

  getActiveDialog() {
    return this.#dialogStrategyState.find(d => d.active);
  }

  removeDialogStrategyById(id: string) {
    const indexRemove = this.#dialogStrategyState.findIndex(s => s.id === id);

    if (indexRemove > 0) {
      this.#dialogStrategyState[indexRemove - 1] = {
        ...this.#dialogStrategyState[indexRemove - 1],
        active: true
      }
    }

    this.#dialogStrategyState.splice(indexRemove, 1);
  }

  getDialogStrategyState() {
    return this.#dialogStrategyState;
  }
}