import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { MdCardModule } from "@angular/material";
@NgModule({
    declarations: [BodyComponent],
    exports: [BodyComponent],
    imports: [MdCardModule]
})
export class BodyModule { }