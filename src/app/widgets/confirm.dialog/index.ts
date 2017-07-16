import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
@Component({
    selector: 'jp-confirm-dialog',
    templateUrl: './confirm.dialog.html',
    styleUrls: ['./confirm.dialog.css']
})
export class ConfigmDialogWidget {

    message: string;
    constructor(
        public dialogRef: MdDialogRef<ConfigmDialogWidget>,
        @Inject(MD_DIALOG_DATA) public data: any) {
        if (this.data.message) {
            console.log(this.data.message);
            this.message = this.data.message;
        }
    }

    onClickYes() {
        this.dialogRef.close(true);
    }

}