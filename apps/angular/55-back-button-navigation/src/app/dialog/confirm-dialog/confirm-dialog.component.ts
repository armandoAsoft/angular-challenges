import { Component } from "@angular/core";
import { BaseDialogComponent } from "../../base-dialog/base-dialog";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle
  ]
})
export class ConfirmDialogComponent extends BaseDialogComponent{
  constructor() {
    super();
  }
}