import { DataInputComponent } from './data-input.component';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from './../../widgets/widgets.module';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule } from "@angular/material";
import { ServicesModule } from "app/services/services.module";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BodyComponent,
        DataInputComponent],
    exports: [BodyComponent],
    imports: [
        // angular specific
        CommonModule,
        FormsModule,
        HttpModule,
        // material specific
        MdCardModule,
        MdButtonModule,
        // service modules
        ServicesModule,
        WidgetsModule,

    ]
})
export class BodyModule { }