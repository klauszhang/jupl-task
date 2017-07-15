import { Device } from './../../models/Device';
import { DeviceService } from './../../services/device.service';
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

    constructor(private deviceService: DeviceService) { }

    ngOnInit(): void {
        this.deviceService.getDevices().subscribe(data => {
            this.device = data;
        });
    }

    onChange(value: string) {
        if (typeof (value) === "string") {
            console.log(value)
            this.value = value;
        }
    }
}