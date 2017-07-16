import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
@Component({
    selector: 'jp-loading-dialog',
    templateUrl: './loading.dialog.html',
    styleUrls: ['./loading.dialog.css']
})
export class LoadingDialogWidget {
    constructor(
        public dialogRef: MdDialogRef<LoadingDialogWidget>) {
    }

}