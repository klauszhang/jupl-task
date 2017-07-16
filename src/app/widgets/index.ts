import { ConfigmDialogWidget } from './confirm.dialog';
import { LoadingScreenWidget } from './loading-screen/loading-screen.widget';
import { InputWidget } from './input/input.widget';
import { NgModule } from '@angular/core';
import {
    MdInputModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdButtonModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
@NgModule({
    exports: [
        InputWidget,
        LoadingScreenWidget,
        ConfigmDialogWidget
    ],
    declarations: [
        InputWidget,
        LoadingScreenWidget,
        ConfigmDialogWidget
    ],
    imports: [
        FormsModule,
        MdInputModule,
        MdProgressSpinnerModule,
        MdDialogModule,
        MdButtonModule
    ],
    entryComponents: [
        ConfigmDialogWidget
    ],
})
export class WidgetsModule { }