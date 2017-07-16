import { LoadingDialogWidget } from './loading.dialog';
import { ConfirmDialogWidget } from './confirm.dialog';
import { LoadingScreenWidget } from './loading-screen/loading-screen.widget';
import { InputWidget } from './input/input.widget';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
        LoadingDialogWidget,
        LoadingScreenWidget,
        ConfirmDialogWidget
    ],
    declarations: [
        InputWidget,
        LoadingDialogWidget,
        LoadingScreenWidget,
        ConfirmDialogWidget
    ],
    imports: [
        FormsModule,
        MdInputModule,
        MdProgressSpinnerModule,
        MdDialogModule,
        MdButtonModule
    ],
    entryComponents: [
        LoadingDialogWidget,
        ConfirmDialogWidget
    ]
})
export class WidgetsModule { }