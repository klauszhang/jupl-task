import { MdToolbarModule } from '@angular/material';
import { HeaderComponent } from './header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
    declarations: [HeaderComponent],
    imports: [
        MdToolbarModule,
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }