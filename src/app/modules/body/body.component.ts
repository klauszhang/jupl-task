import { DeviceService } from 'app/services';
import { ConfigmDialogWidget } from './../../widgets/confirm.dialog/index';
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
    deviceId = '40072';
    constructor(
        private deviceService: DeviceService,
        private dialog: MdDialog) { }

    ngOnInit(): void {
        this.loadData();
    }

    onChange(value: string) {
        if (typeof (value) === "string") {
            console.log(value)
            this.value = value;
        }
    }

    onDeviceIdChange(value: string) {
        console.log(value);
        // TODO reload page and device data
    }
    onClickReset() {
        // open confirm dialog
        this.dialog
            .open(ConfigmDialogWidget,
            { data: { message: 'This will reset the information to its original.' } })
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.device = undefined;
                    this.loadData();
                }
            });

    }
    private loadData = () =>
        this.deviceService.getDevices(this.deviceId)
            .subscribe(data => {
                this.device = data;
            });
}