import { ChangeDeviceDialog } from './device-info/change-device.dialog';
import { DeviceSettingInputComponent } from './device-setting-input';
import { DeviceInfoComponent } from './device-info';
import { DeviceSettingComponent } from './device-settings';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from 'app/widgets';
import { BodyComponent } from './body.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    MdCardModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdIconModule,
    MdDialogModule,
    MdTooltipModule,
    MdInputModule
} from "@angular/material";
import { ServicesModule, AuthInterceptorService } from "app/services";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
        HttpClientModule,
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        }
    ]

})
export class BodyModule { }