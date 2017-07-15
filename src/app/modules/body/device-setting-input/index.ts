import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RuntimeSettings } from "app/models/RuntimeSettings";
@Component({
    selector: 'jp-device-setting-input',
    templateUrl: './device-setting-input.component.html'
})
export class DeviceSettingInputComponent {

    @Input() settings: RuntimeSettings;
    @Output() output = new EventEmitter<RuntimeSettings>();
    @Input() field: string;

    // label for the input
    @Input() title: string;
    // type for the input
    @Input() type: string;

    onChange(value, field) {
        this.settings[field] = value;
        this.output.emit(this.settings);
    }

    getType = () => this.type ? this.type : typeof (this.settings[this.field])
    getTitle = () => this.title ? this.title : this.field
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())

}