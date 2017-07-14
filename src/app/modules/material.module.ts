import { MdButtonModule, MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MdButtonModule, MdToolbarModule],
    exports: [MdButtonModule, MdToolbarModule]
})
export class MaterialModule { }