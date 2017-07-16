import { MdDialogRef } from '@angular/material';
import { LoadingDialogWidget } from './../../widgets/loading.dialog/index';
import { DeviceService } from 'app/services';
import { ConfirmDialogWidget } from './../../widgets/confirm.dialog/index';
import { MdDialog } from '@angular/material';
import { Device } from './../../models/Device';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'jp-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
    providers: [DeviceService]
})
export class BodyComponent implements OnInit {
    value: string;
    device: Device;
    deviceId = 40072;
    constructor(
        private deviceService: DeviceService,
        private dialog: MdDialog) { }

    ngOnInit(): void {
        this.loadData();
    }

    onChange(value: string) {
        if (typeof (value) === "string") {
            this.value = value;
        }
    }

    onDeviceIdChange(value: number) {
        this.device = null;
        this.deviceId = value;
        this.loadData();
    }
    onClickReset() {
        // open confirm dialog
        this.dialog
            .open(ConfirmDialogWidget,
            { data: { message: 'This will reset the information to its original.' } })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.device = undefined;
                    this.loadData();
                }
            });
    }

    onClickSave() {
        this.dialog
            .open(ConfirmDialogWidget, { data: { message: 'this will save information.' } })
            .afterClosed()
            .subscribe(result => {
                let loadingDialog = this.dialog.open(LoadingDialogWidget);
                if (result) {
                    this.deviceService
                        .updateDevice(this.device.VigilId, this.device)
                        .subscribe(response => {
                            this.device = response;
                            loadingDialog.close();
                        });
                }
            })
    }



    private loadData = () =>
        this.deviceService
            .getDevices(this.deviceId)
            .subscribe(data => {
                this.device = data;
            });

}