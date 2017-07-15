import { Device } from './../../models/Device';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'jp-data-input',
    templateUrl: './data-input.component.html',
})
export class DataInputComponent {

    @Input() device: Device;
}