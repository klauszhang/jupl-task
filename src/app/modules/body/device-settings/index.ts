import { RuntimeSettings } from './../../../models/RuntimeSettings';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Device } from "app/models/Device";
@Component({
    selector: 'jp-device-settings',
    templateUrl: './device-settings.component.html',
    styleUrls: ['./device-settings.component.css']
})
export class DeviceSettingComponent {
    @Input() settings: RuntimeSettings;
    @Output() output = new EventEmitter<RuntimeSettings>();

    onChange(value) {
        this.settings = value;
    }

    onChangeField(value, field) {
        this.settings[field] = value.checked;
    }
}