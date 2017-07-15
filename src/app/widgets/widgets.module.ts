import { InputWidget } from './input/input.widget';
import { NgModule } from '@angular/core';
import { MdInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
@NgModule({
    exports: [InputWidget],
    declarations: [InputWidget],
    imports: [
        FormsModule,
        MdInputModule]
})
export class WidgetsModule { }