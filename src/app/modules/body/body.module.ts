import { DeviceSettingInputComponent } from './device-setting-input/index';
import { DeviceInfoComponent } from './device-info';
import { DeviceSettingComponent } from './device-settings';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from './../../widgets/widgets.module';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule, MdSlideToggleModule } from "@angular/material";
import { ServicesModule } from "app/services/services.module";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BodyComponent,
        DeviceSettingComponent,
        DeviceSettingInputComponent,
        DeviceInfoComponent
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
        // service modules
        ServicesModule,
        WidgetsModule,
    ]
})
export class BodyModule { }