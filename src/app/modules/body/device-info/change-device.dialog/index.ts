import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
@Component({
    selector: 'jp-change-device-dialog',
    templateUrl: './change-device.dialog.html',
    styleUrls: ['./change-device.dialog.css']
})
export class ChangeDeviceDialog {

    deviceId: string;

    constructor(
        public dialogRef: MdDialogRef<ChangeDeviceDialog>,
        @Inject(MD_DIALOG_DATA) public data: any) {
        this.deviceId = this.data.deviceId;
    }

    onClickOk() {
        this.dialogRef.close(this.deviceId);
    }
}