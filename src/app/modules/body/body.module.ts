import { FormsModule } from '@angular/forms';
import { WidgetsModule } from './../../widgets/widgets.module';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule } from "@angular/material";
@NgModule({
    declarations: [BodyComponent],
    exports: [BodyComponent],
    imports: [
        FormsModule,
        MdCardModule,
        MdButtonModule,
        WidgetsModule
    ]
})
export class BodyModule { }