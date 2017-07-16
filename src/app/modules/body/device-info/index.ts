import { ChangeDeviceDialog } from './change-device.dialog/index';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from "@angular/material";
@Component({
    selector: 'jp-device-info',
    templateUrl: './device-info.component.html',
    styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
    @Input() uid: string;
    @Input() vigilId: string;
    @Output() deviceIdChange = new EventEmitter<string>();

    constructor(private dialog: MdDialog) { }

    onClickEdit() {
        const dialogRef = this.dialog.open(ChangeDeviceDialog,
            { data: { deviceId: this.vigilId } });
        dialogRef.afterClosed()
            .subscribe(result => {
                this.deviceIdChange.emit(result);
            })
    }
}