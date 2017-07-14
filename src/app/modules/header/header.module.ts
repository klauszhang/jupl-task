import { MaterialModule } from './../material.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [HeaderComponent],
    imports: [MaterialModule],
    exports: [HeaderComponent]
})
export class HeaderModule { }