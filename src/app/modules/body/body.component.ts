import { MdDialogRef } from '@angular/material';
import { LoadingDialogWidget } from './../../widgets/loading.dialog/index';
import { DeviceService } from 'app/services';
import { ConfirmDialogWidget } from './../../widgets/confirm.dialog/index';
import { MdDialog } from '@angular/material';
import { Device } from './../../models/Device';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";



@Component({
    selector: 'jp-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
    providers: [DeviceService]
})
export class BodyComponent implements OnInit {
    readError: HttpErrorResponse;
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
                    this.loadData();
                }
            });
    }

    onClickSave() {
        this.dialog
            .open(ConfirmDialogWidget, { data: { message: 'this will save information.' } })
            .afterClosed()
            .subscribe(result => {
                const loadingDialog = this.dialog.open(LoadingDialogWidget);
                if (result) {
                    this.deviceService
                        .updateDevice(this.device.VigilId, this.device)
                        .subscribe(response => {
                            this.device = response;
                            loadingDialog.close();
                        }, error => {
                            this.readError = error;
                            loadingDialog.close();
                        });
                }
            })
    }

    handleError(error: HttpErrorResponse) {
        this.readError = error;
    }

    loadData() {
        this.device = undefined;
        this.readError = undefined;
        this.deviceService
            .getDevices(this.deviceId)
            .subscribe(
            data => {
                this.device = data;
            },
            error => this.readError = error
            );
    }

}