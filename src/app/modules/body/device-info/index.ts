import { Component, Input } from '@angular/core';
@Component({
    selector: 'jp-device-info',
    templateUrl: './device-info.component.html',
    styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
    @Input() uid: string;
    @Input() vigilId: string;
}