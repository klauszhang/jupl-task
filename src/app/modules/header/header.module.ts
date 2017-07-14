import { MdToolbarModule } from '@angular/material';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [HeaderComponent],
    imports: [MdToolbarModule],
    exports: [HeaderComponent]
})
export class HeaderModule { }