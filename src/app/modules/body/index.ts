import { ChangeDeviceDialog } from './device-info/change-device.dialog';
import { DeviceSettingInputComponent } from './device-setting-input';
import { DeviceInfoComponent } from './device-info';
import { DeviceSettingComponent } from './device-settings';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from 'app/widgets';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import {
    MdCardModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdIconModule,
    MdDialogModule,
    MdTooltipModule,
    MdInputModule
} from "@angular/material";
import { ServicesModule } from "app/services";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BodyComponent,
        DeviceSettingComponent,
        DeviceSettingInputComponent,
        DeviceInfoComponent,
        ChangeDeviceDialog
    ],
    entryComponents: [
        ChangeDeviceDialog
    ],
    exports: [BodyComponent],
    imports: [
        // angular specific
        CommonModule,
        FormsModule,
        HttpModule,
        // material specific
        MdCardModule,
        MdButtonModule,
        MdSlideToggleModule,
        MdIconModule,
        MdDialogModule,
        MdTooltipModule,
        MdInputModule,
        // service modules
        ServicesModule,
        WidgetsModule,
    ],
    providers: [

    ]

})
export class BodyModule { }