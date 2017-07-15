import { LoadingScreenWidget } from './loading-screen/loading-screen.widget';
import { InputWidget } from './input/input.widget';
import { NgModule } from '@angular/core';
import { MdInputModule, MdProgressSpinnerModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
@NgModule({
    exports: [
        InputWidget,
        LoadingScreenWidget
    ],
    declarations: [
        InputWidget,
        LoadingScreenWidget],
    imports: [
        FormsModule,
        MdInputModule,
        MdProgressSpinnerModule
    ]
})
export class WidgetsModule { }